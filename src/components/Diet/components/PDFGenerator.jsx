// PDFGenerator.js
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
    let data = [];

    if (plan === "weight_loss") {
      data = [
        [
          "Monday",
          "One bowl of Poha + 1 glass of milk",
          "Handful amount of nut or seed",
          "1 bowl of brown rice with dal + salad + 1 bowl Bhindi",
          "1 Apple + 1 cup of green tea/ black coffee",
          "Two chapatis + 1 bowl of Jeera Aloo",
        ],
        [
          "Tuesday",
          "Omelette with two brown bread + one glass of milk",
          "1 bowl fruit salad + 1 glass coconut water",
          "1 bowl rajma + 1 bowl aloo gobhi + 1 bowl rice + 1 chapatti + 1 bowl cucumber raita",
          "1 cup tea/ coffee + 1 cup papri chaat",
          "1 bowl lauki kofta + 2 chapati",
        ],
        [
          "Wednesday",
          "Namkeen Dalia + 1 apple",
          "One glass of fruit smoothie",
          "1 bowl paneer curry + 1 bowl boiled rice + 2 chapatti + salad",
          "1 cup tea/ coffee + 1 cup aloo chaat",
          "1 bowl matar & mushroom curry + 2 chapati",
        ],
        [
          "Thursday",
          "Moong dal Cheela + 1 glass of milk",
          "One bowl yogurt",
          "1 bowl palak paneer + 1 bowl rice + 1 chapatti + salad",
          "1 cup tea/coffee + 1 cup boiled chana chat",
          "One bowl bottle gourd curry + 2 chapati",
        ],
        [
          "Friday",
          "1 bowl of oats + 1 glass of milk",
          "One glass of coconut water",
          "1 bowl paneer curry + 1 bowl dal + 1 bowl rice + salad",
          "1 cup mur-more chat + 1 cup tea/coffee",
          "1 bowl mustard greens + 2 chapati",
        ],
        [
          "Saturday",
          "Veggie stuffed omelet + 1 glass of milk",
          "Handful amount of seeds or nut",
          "1 bowl boiled rice + 2 chapatti + 1 bowl dal + salad + 1 bowl ghia raita",
          "1 apple + 1 cup green tea/ black coffee",
          "1 bowl of paneer curry + 2 chappati",
        ],
        [
          "Sunday",
          "Besan Chila + 1 glass milk",
          "1 Apple",
          "1 bowl soya bean curry + 1 bowl tinda + 2 chapatti + salad",
          "1 cup boiled masala corn + 1 cup tea/coffee",
          "1 bowl mix veg + 2 chapati",
        ],
      ];
    } else if (plan === "weight_gain") {
      data = [
        [
          "Sunday",
          "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          "1 cup banana shake",
          "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
          "1 cup strawberry smoothie + 1 cup vegetable poha",
          "1.5 cup chicken curry + 3 chapatti + salad",
        ],
        [
          "Monday",
          "3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          "1 cup mango shake",
          "1 cup moong dal/ chicken curry + 1 cup potato and cauliflower vegetable + 3 chapatti + 1/2 cup rice + salad",
          "1 cup pomegranate juice + 2 butter toasted bread",
          "1 cup beans potato vegetable + 3 chapatti + salad",
        ],
        [
          "Tuesday",
          "3 paneer stuffed besan cheela + green chutney + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          "1 apple smoothie with maple syrup",
          "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad",
          "1 cup tomato soup with bread crumbs + 1 cup aloo chaat",
          "1 cup carrot peas vegetable + 3 chapatti + salad",
        ],
        [
          "Wednesday",
          "1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          "1 cup ripe banana with 2 tsp ghee",
          "1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2 cup rice + salad",
          "1 cup vegetable juice + 1 cup upma",
          "1.5 cup parwal vegetable + 3 chapatti + salad",
        ],
        [
          "Thursday",
          "2 cucumber potato sandwich + 1 tsp green chutney + 1 orange juice + 3 cashews + 2 walnuts + 4 almonds",
          "1 cup buttermilk + 1 cup sweet potato chaat",
          "1 cup white chana/ fish curry + 3 chapatti + 1/2 cup rice + salad",
          "1 cup almond milk + banana",
          "1 cup cauliflower potato vegetable + 3 chapatti + salad",
        ],
        [
          "Friday",
          "2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          "2 cups watermelon juice",
          "1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2 cup rice + salad",
          "1 cup sprouts salad + 2 potato cheela + green chutney",
          "1 cup peas mushroom vegetable + 3 chapatti + salad",
        ],
        [
          "Saturday",
          "3 vegetable suji cheela + 1 cup strawberry shake + 4 cashews + 4 almonds + 3 walnuts",
          "1 cup coconut water + 1 cup pomegranate",
          "1 cup mix dal + 1 cup soybean curry + 3 chapatti + 1/2 cup curd + salad",
          "1 cup fruit salad + 4 pc vegetable cutlets + green chutney",
          "1 cup karela vegetable + 3 chapatti + salad",
        ],
      ];
    }

    // Add title and table to the PDF
    doc.setFontSize(18);
    doc.text(
      plan === "weight_loss"
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
      `${plan === "weight_loss" ? "weight_loss" : "weight_gain"}_diet_plan.pdf`
    );
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Download {plan === "weight_loss" ? "Weight Loss" : "Weight Gain"} Diet
      Plan
    </button>
  );
};

export default PDFGenerator;
