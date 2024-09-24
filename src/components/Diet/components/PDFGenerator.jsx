import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { dietPlans } from "./Data";

const PDFGenerator = ({ plan }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const columns = [
      "Day",
      "Breakfast",
      "Mid-Meal",
      "Lunch",
      "Evening Snack",
      "Dinner",
    ];

    let data;
    if (plan === "weight_loss" || plan === "weight_gain") {
      data = dietPlans[plan];
    } else if (
      plan === "non_veg_weight_loss" ||
      plan === "non_veg_weight_gain"
    ) {
      data = dietPlans[plan];
    }

    doc.setFontSize(18);
    doc.text(
      plan === "weight_loss" || plan === "non_veg_weight_loss"
        ? "Weight Loss Diet Plan"
        : "Weight Gain Diet Plan",
      14,
      22
    );

    doc.autoTable({
      head: [columns],
      body: data,
      startY: 30,
      margin: { horizontal: 10 },
      styles: { cellPadding: 2, fontSize: 10 },
      headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    doc.save(
      `${
        plan === "weight_loss" || plan === "non_veg_weight_loss"
          ? "weight_loss"
          : "weight_gain"
      }_diet_plan.pdf`
    );
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Download{" "}
      {plan === "weight_loss" || plan === "non_veg_weight_loss"
        ? "Weight Loss"
        : "Weight Gain"}{" "}
      Diet Plan
    </button>
  );
};

export default PDFGenerator;
