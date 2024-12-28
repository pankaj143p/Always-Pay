

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceItem from './InvoiceItem';
import InvoiceModal from './InvoiceModal';
import InputGroup from 'react-bootstrap/InputGroup';
import itemSuggestions from './items'; // Import the suggestions

import '../../src/index.css';

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currency: '$',
      currentDate: '',
      invoiceNumber: 1,
      dateOfIssue: '',
      billTo: '',
      billToEmail: '',
      billToAddress: '',
      billFrom: '',
      billFromEmail: '',
      billFromAddress: '',
      notes: '',
      total: '0.00',
      subTotal: '0.00',
      taxRate: '',
      taxAmmount: '0.00',
      discountRate: '',
      discountAmmount: '0.00',
      itemNameSuggestions: itemSuggestions, // Use the imported suggestions
      filteredSuggestions: [],
    };

    this.state.items = [
      {
        id: 0,
        name: '',
        description: '',
        price: '1.00',
        quantity: 1,
      }
    ];

    this.editField = this.editField.bind(this);
  }

  componentDidMount(prevProps) {
    this.handleCalculateTotal();
  }

  handleRowDel(items) {
    var index = this.state.items.indexOf(items);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var items = {
      id: id,
      name: '',
      price: '1.00',
      description: '',
      quantity: 1,
    }
    this.state.items.push(items);
    this.setState(this.state.items);
  }

  handleCalculateTotal() {
    var items = this.state.items;
    var subTotal = 0;

    items.map(function (items) {
      subTotal = parseFloat(subTotal + (parseFloat(items.price).toFixed(2) * parseInt(items.quantity))).toFixed(2);
    });

    this.setState({
      subTotal: parseFloat(subTotal).toFixed(2),
    }, () => {
      this.setState({
        taxAmmount: parseFloat(parseFloat(subTotal) * (this.state.taxRate / 100)).toFixed(2),
      }, () => {
        this.setState({
          discountAmmount: parseFloat(parseFloat(subTotal) * (this.state.discountRate / 100)).toFixed(2),
        }, () => {
          this.setState({
            total: ((subTotal - this.state.discountAmmount) + parseFloat(this.state.taxAmmount)),
          });
        });
      });
    });
  }

  onItemizedItemEdit(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    var items = this.state.items.slice();
    var newItems = items.map(function (items) {
      for (var key in items) {
        if (key == item.name && items.id == item.id) {
          items[key] = item.value;
        }
      }
      return items;
    });
    this.setState({ items: newItems });
    this.handleCalculateTotal();
  }

  editField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.handleCalculateTotal();
  };

  onCurrencyChange = (selectedOption) => {
    this.setState(selectedOption);
  };

  openModal = (event) => {
    event.preventDefault();
    this.handleCalculateTotal();
    this.setState({ isOpen: true });
  };

  closeModal = (event) => this.setState({ isOpen: false });

  handleItemNameChange = (event, index) => {
    const value = event.target.value;

    // Filter suggestions based on the input value
    const filteredSuggestions = this.state.itemNameSuggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ filteredSuggestions });

    // Update the item name in the state when the user types
    const items = [...this.state.items];
    items[index].name = value;
    this.setState({ items });
  };

  selectItemNameSuggestion = (suggestion, index) => {
    // Update the item name with the selected suggestion
    const items = [...this.state.items];
    items[index].name = suggestion;
    this.setState({
      items,
      filteredSuggestions: [], // Clear suggestions after selection
    });
  };

  render() {
    return (
      <Form onSubmit={this.openModal}>
        <Row>
          <Col md={8} lg={9}>
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
              <div>
                <h3 className='greet text-center text-danger-emphasis' > || जय श्री महाकाल ॥ श्री गणेशाय नमः ॥ </h3>
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <p className="upp">Email : kushwahcomputer341@gmail.com</p>
                  <p className="upp">Mobile : 9752697108</p>
                </div>
                <h1 className="display-4 fw-bold">Kushwah Computer Solutions</h1>
              </div>
              <div className="d-flex flex-row align-items-start justify-content-between mb-3">
                <div className="d-flex flex-column">
                  <div className="mb-2">
                    <span className="fw-bold">Current Date:&nbsp;</span>
                    <span className="current-date">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold me-2">Invoice Number:&nbsp;</span>
                  <Form.Control
                    type="number"
                    value={this.state.invoiceNumber}
                    name={"invoiceNumber"}
                    onChange={this.editField}
                    min="1"
                    style={{ maxWidth: '70px' }}
                    required="required"
                  />
                </div>
              </div>
              <hr className="my-4" />
              <Row className="mb-5">
                <Col>
                  <Form.Label className="fw-bold">Bill to:</Form.Label>
                  <Form.Control placeholder={"Who is this invoice to?"} rows={3} value={this.state.billTo} type="text" name="billTo" className="my-2" onChange={this.editField} autoComplete="name" required="required" />
                  <Form.Control placeholder={"Email address"} value={this.state.billToEmail} type="email" name="billToEmail" className="my-2" onChange={this.editField} autoComplete="email" required="required" />
                  <Form.Control placeholder={"Billing address"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={this.editField} required="required" />
                </Col>
                <Col>
                  <Form.Label className="fw-bold">Bill from:</Form.Label>
                  <Form.Control placeholder={"Who is this invoice from?"} rows={3} value={this.state.billFrom} type="text" name="billFrom" className="my-2" onChange={this.editField} autoComplete="name" required="required" />
                  <Form.Control placeholder={"Email address"} value={this.state.billFromEmail} type="email" name="billFromEmail" className="my-2" onChange={this.editField} autoComplete="email" required="required" />
                  <Form.Control placeholder={"Billing address"} value={this.state.billFromAddress} type="text" name="billFromAddress" className="my-2" autoComplete="address" onChange={this.editField} required="required" />
                </Col>
              </Row>
              {/* Itemized Items */}
              <div>
                {this.state.items.map((item, index) => (
                  <div key={index}>
                    <Form.Label className="fw-bold">Item Name:</Form.Label>
                    <Form.Control
                      type="text"
                      value={item.name}
                      onChange={(event) => this.handleItemNameChange(event, index)}
                      autoComplete="off"
                      placeholder="Start typing item name..."
                    />
                    {this.state.filteredSuggestions.length > 0 && (
                      <div className="suggestions-list">
                        {this.state.filteredSuggestions.map((suggestion, idx) => (
                          <div
                            key={idx}
                            className="suggestion-item"
                            onClick={() => this.selectItemNameSuggestion(suggestion, index)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <InvoiceItem onItemizedItemEdit={this.onItemizedItemEdit.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} currency={this.state.currency} items={this.state.items} />
            </Card>
          </Col>
          <Col md={4} lg={3}>
            <div className="sticky-top pt-md-3 pt-xl-4">
              <Button variant="primary" type="submit" className="d-block w-100">
                Review Invoice
              </Button>
              <InvoiceModal showModal={this.state.isOpen} closeModal={this.closeModal} info={this.state} items={this.state.items} currency={this.state.currency} subTotal={this.state.subTotal} taxAmmount={this.state.taxAmmount} discountAmmount={this.state.discountAmmount} total={this.state.total} />
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default InvoiceForm;
