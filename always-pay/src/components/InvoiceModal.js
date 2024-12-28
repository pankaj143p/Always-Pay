// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';
// import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf'

// function GenerateInvoice() {
//   html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png', 1.0);
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'pt',
//       format: [612, 792]
//     });
//     pdf.internal.scaleFactor = 1;
//     const imgProps= pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('invoice-001.pdf');
//   });
// }

// class InvoiceModal extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <div>
//         <Modal show={this.props.showModal} onHide={this.props.closeModal} size="lg" centered>
//           <div id="invoiceCapture">
//             <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
//               <div className="w-100">
//                 <h4 className="fw-bold my-2">{this.props.info.billFrom||'John Uberbacher'}</h4>
//                 <h6 className="fw-bold text-secondary mb-1">
//                   Invoice #: {this.props.info.invoiceNumber||''}
//                 </h6>
//               </div>
//               <div className="text-end ms-4">
//                 <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
//                 <h5 className="fw-bold text-secondary"> {this.props.currency} {this.props.total}</h5>
//               </div>
//             </div>
//             <div className="p-4">
//               <Row className="mb-4">
//                 <Col md={4}>
//                   <div className="fw-bold">Billed to:</div>
//                   <div>{this.props.info.billTo||''}</div>
//                   <div>{this.props.info.billToAddress||''}</div>
//                   <div>{this.props.info.billToEmail||''}</div>
//                 </Col>
//                 <Col md={4}>
//                   <div className="fw-bold">Billed From:</div>
//                   <div>{this.props.info.billFrom||''}</div>
//                   <div>{this.props.info.billFromAddress||''}</div>
//                   <div>{this.props.info.billFromEmail||''}</div>
//                 </Col>
//                 <Col md={4}>
//                   <div className="fw-bold mt-2">Date Of Issue:</div>
//                   <div>{this.props.info.dateOfIssue||''}</div>
//                 </Col>
//               </Row>
//               <Table className="mb-0">
//                 <thead>
//                   <tr>
//                     <th>QTY</th>
//                     <th>DESCRIPTION</th>
//                     <th className="text-end">PRICE</th>
//                     <th className="text-end">AMOUNT</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.props.items.map((item, i) => {
//                     return (
//                       <tr id={i} key={i}>
//                         <td style={{width: '70px'}}>
//                           {item.quantity}
//                         </td>
//                         <td>
//                           {item.name} - {item.description}
//                         </td>
//                         <td className="text-end" style={{width: '100px'}}>{this.props.currency} {item.price}</td>
//                         <td className="text-end" style={{width: '100px'}}>{this.props.currency} {item.price * item.quantity}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </Table>
//               <Table>
//                 <tbody>
//                   <tr>
//                     <td>&nbsp;</td>
//                     <td>&nbsp;</td>
//                     <td>&nbsp;</td>
//                   </tr>
//                   <tr className="text-end">
//                     <td></td>
//                     <td className="fw-bold" style={{width: '100px'}}>SUBTOTAL</td>
//                     <td className="text-end" style={{width: '100px'}}>{this.props.currency} {this.props.subTotal}</td>
//                   </tr>
//                   {this.props.taxAmmount != 0.00 &&
//                     <tr className="text-end">
//                       <td></td>
//                       <td className="fw-bold" style={{width: '100px'}}>TAX</td>
//                       <td className="text-end" style={{width: '100px'}}>{this.props.currency} {this.props.taxAmmount}</td>
//                     </tr>
//                   }
//                   {this.props.discountAmmount != 0.00 &&
//                     <tr className="text-end">
//                       <td></td>
//                       <td className="fw-bold" style={{width: '100px'}}>DISCOUNT</td>
//                       <td className="text-end" style={{width: '100px'}}>{this.props.currency} {this.props.discountAmmount}</td>
//                     </tr>
//                   }
//                   <tr className="text-end">
//                     <td></td>
//                     <td className="fw-bold" style={{width: '100px'}}>TOTAL</td>
//                     <td className="text-end" style={{width: '100px'}}>{this.props.currency} {this.props.total}</td>
//                   </tr>
//                 </tbody>
//               </Table>
//               {this.props.info.notes &&
//                 <div className="bg-light py-3 px-4 rounded">
//                   {this.props.info.notes}
//                 </div>}
//             </div>
//           </div>
//           <div className="pb-4 px-4">
//             <Row>
//               <Col md={6}>
//                 <Button variant="primary" className="d-block w-100" onClick={GenerateInvoice}>
//                   <BiPaperPlane style={{width: '15px', height: '15px', marginTop: '-3px'}} className="me-2"/>Send Invoice
//                 </Button>
//               </Col>
//               <Col md={6}>
//                 <Button variant="outline-primary" className="d-block w-100 mt-3 mt-md-0" onClick={GenerateInvoice}>
//                   <BiCloudDownload style={{width: '16px', height: '16px', marginTop: '-3px'}} className="me-2"/>
//                   Download Copy
//                 </Button>
//               </Col>
//             </Row>
//           </div>
//         </Modal>
//         <hr className="mt-4 mb-3"/>
//       </div>
//     )
//   }
// }

// export default InvoiceModal;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class InvoiceModal extends React.Component {
  constructor(props) {
    super(props);
  }

  // Function to handle the invoice generation
  handleGenerateInvoice = () => {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [612, 792]
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice-001.pdf');
    });
  };

  render() {
    const {
      showModal,
      closeModal,
      info,
      items,
      currency,
      total,
      subTotal,
      taxAmmount,
      discountAmmount
    } = this.props;

    return (
      // Invoice Modal view while the bill is generated
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <div id="invoiceCapture">
          <div className="d-flex flex-column bg-light p-4">
            <h3 className='greet text-center text-danger-emphasis'> || जय श्री महाकाल ॥ श्री गणेशाय नमः ॥ </h3>
            <div className="d-flex flex-row align-items-start justify-content-between">
              <p className="upp">Email : kushwahcomputer341@gmail.com</p>
              <p className="upp">Mobile : 9752697108</p>
            </div>
            <div>
              <h1 className="name">Kushwah Computer Solutions</h1>
              <h4 className='text-center'>Suthaliya Road Gopal Mandir Wali Gali Madhusoodangarh Dist Guna (M.P.)</h4>
            </div>
            <hr className='line'></hr>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <div>
                <h4 className="fw-bold">M/s  :  {info.billTo || 'Kushwah Computer Solutions'}</h4>
                <p className='details' >{info.billToEmail}</p>
                <p className='details'>{info.billToMobile}</p>
                <p className='details' > Address : {info.billToAddress}</p>
              </div>
              <div className="text-end">
                <h5 className="fw-bold text-secondary">Amount Due: {currency} {total}</h5>
              </div>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>QTY</th>
                  <th>DESCRIPTION</th>
                  <th className="text-end">PRICE</th>
                  <th className="text-end">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.quantity}</td>
                    <td>{item.name} - {item.description}</td>
                    <td className="text-end">{currency} {item.price}</td>
                    <td className="text-end">{currency} {item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Row>
              <Col>
                <Table borderless>
                  <tbody>
                    <tr className="text-end">
                      <td className="fw-bold">Subtotal</td>
                      <td>{currency} {subTotal}</td>
                    </tr>
                    {taxAmmount !== '0.00' &&
                      <tr className="text-end">
                        <td className="fw-bold">Tax</td>
                        <td>{currency} {taxAmmount}</td>
                      </tr>
                    }
                    {discountAmmount !== '0.00' &&
                      <tr className="text-end">
                        <td className="fw-bold">Discount</td>
                        <td>{currency} {discountAmmount}</td>
                      </tr>
                    }
                    <tr className="text-end">
                      <td className="fw-bold">TOTAL</td>
                      <td>{currency} {total}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            {/* Terms and Conditions */}
            {/* need to change in future */}
            <div className="bg-light p-3 mt-4 rounded">
              <h6 className="fw-bold">Terms & Conditions:</h6>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Subject to BIAORA Jurisdiction only.</li>
                <li>We are traders, not manufacturers of the products.</li>
                <li>
                  All warranties of the product sold will be covered by the
                  respective manufacturer/service centers as per their terms &
                  conditions.
                </li>
                <li>Goods once sold will not be taken back.</li>
                <li>
                  <strong>Bank:</strong> HDFC A/C 50200015454960 IFSC HDFC0002111
                </li>
              </ul>
            </div>
            <div>
            <p className="footer" >&copy; 2024  CoderXyz. All rights reserved.</p>
          </div>
          </div>
        </div>
        <div className="p-4 text-end">
          <Row>
            <Col md={6}>
              <Button variant="primary" className="w-100" onClick={this.handleGenerateInvoice}>
                <BiPaperPlane className="me-2" /> Send Invoice
              </Button>
            </Col>
            <Col md={6}>
              <Button variant="outline-primary" className="w-100 mt-3 mt-md-0" onClick={this.handleGenerateInvoice}>
                <BiCloudDownload className="me-2" /> Download Copy
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

export default InvoiceModal;
