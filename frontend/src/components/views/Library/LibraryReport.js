// import jsPDF from 'jspdf';
// import "jspdf-autotable";
// import React from "@types/react";

// // import { format } from "date-fns";

// const GeneratePdf = library =>{

//     const LibDoc = new jsPDF();

//     const tableColumn = ["Related Course","Topic","Link","File","Author","Date"];
//     const tableRows = [];

//     library.forEach(library => {
//         const libraryData = [
//             library.StudentID,
//             library.StudentName,
//             library.PhoneNo,
//             library.Email,
//             library.RegisteredCourse,
//             library.PaymentAmount,
//             library.PaymentDate,
//         ];

//         console.log(libraryData);

//         tableRows.push(libraryData);
//     });

//     const d = new Date();
//     const year = d.getFullYear();
//     const month = d.getMonth() + 1;
//     const date = d.getDate();


//     LibDoc.autoTable(tableColumn,tableRows,{startY:20});
//     LibDoc.text("List of Library contents",14,15);
//     LibDoc.save(`Library_Report_${year +" "+ month +" "+date}.pdf`);
// };

// export default GeneratePdf;