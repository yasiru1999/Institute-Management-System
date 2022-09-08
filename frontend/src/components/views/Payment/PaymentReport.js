import jsPDF from 'jspdf';
import "jspdf-autotable";

// import { format } from "date-fns";

const GeneratePdf = payments =>{

    const payDoc = new jsPDF();

    const tableColumn = ["Student ID","Student Name","Phone","Email","Registered Course"," Payment Amount", "Payment Date"];
    const tableRows = [];

    payments.forEach(payments => {
        const paymentData = [
            payments.StudentID,
            payments.StudentName,
            payments.PhoneNo,
            payments.Email,
            payments.RegisteredCourse,
            payments.PaymentAmount,
            payments.PaymentDate,
        ];

        console.log(paymentData);

        tableRows.push(paymentData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();


    payDoc.autoTable(tableColumn,tableRows,{startY:20});
    payDoc.text("List of Payments",14,15);
    payDoc.save(`Payment_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;