import jsPDF from 'jspdf';
import "jspdf-autotable";
//import { useParams } from 'react-router-dom';

const GenerateAttendancePdf = (attendanceList,id) =>{

    const attenDoc = new jsPDF();
    //const {id} = useParams("");

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const fullDate = year +"_" + month +"_" + date;

    const tableColumn = ["Date", "Student Name", "Session", "Feedback"];
    const tableRows = [];

    attendanceList.forEach(attendanceList => {
        const transactionData = [
            attendanceList.curDate,
            attendanceList.studentName,
            attendanceList.session,
            attendanceList.feedback
        ];
        tableRows.push(transactionData);
    });

    attenDoc.autoTable(tableColumn,tableRows,{startY:20});
    attenDoc.text(`Student attendance Report - ${id}`,14,15);
    attenDoc.save(`AttendRepo${fullDate}.pdf`);
};

export default GenerateAttendancePdf;