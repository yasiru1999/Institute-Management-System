import jsPDF from 'jspdf';
import "jspdf-autotable";

// import { format } from "date-fns";

const GeneratePdf = Inquiries =>{

    const inqDoc = new jsPDF();

    const tableColumn = ["Student ID","Student Name","Phone","Email","Registered Course"," Payment Amount", "Payment Date"];
    const tableRows = [];

    Inquiries.forEach(inquiries => {
        const inquiryData = [
            inquiries.FirstName,
            inquiries.LastName,
            inquiries.PhoneNumber,
            inquiries.Email,
            inquiries.InquiryCategory,
            inquiries.StudentID,
            inquiries.Inquiry,
        ];

        console.log(inquiryData);

        tableRows.push(inquiryData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();


    inqDoc.autoTable(tableColumn,tableRows,{startY:20});
    inqDoc.text("List of Inquiries",14,15);
    inqDoc.save(`Inquiry_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;