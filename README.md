# Project-FORESIGHT-AI-Powered-Demand-Inventory-Intelligence-Platform
Project FORESIGHT is a retail sales and inventory analytics project built with Power BI, DAX, and Excel. It includes 12 dashboard pages covering sales trends, product performance, stockout and overstock risks, promotions, seasonality, forecasts, customer insights, and business recommendations.
# 🔮 Project FORESIGHT

### AI-Powered Demand & Inventory Intelligence Platform



---

## 📌 Project Overview

**Project FORESIGHT** is an AI-powered demand forecasting and inventory intelligence platform designed to help retail businesses make data-driven inventory decisions.

The platform combines data analytics, machine learning, and business intelligence to forecast demand, identify potential stockouts, detect excess inventory, and generate actionable business recommendations.

It transforms raw retail data into meaningful insights through an interactive **12-page Power BI dashboard**, helping businesses understand sales patterns, optimize inventory levels, and plan future demand.

### 🎯 Project Objectives

* Forecast future demand and revenue to support purchasing decisions.
* Identify products at risk of stockouts before inventory runs out.
* Detect overstocked and slow-moving products.
* Analyze sales trends across products, categories, seasons, and customer segments.
* Provide actionable, data-driven recommendations for inventory optimization.

---

## 🚀 Key Features

### 📊 1. Executive Dashboard

* Overview of revenue, gross profit, units sold, and inventory.
* Key business performance indicators.
* Sales trends and category-level performance.
* Executive-level business insights.

### 📈 2. Sales Analytics

* Year-over-year revenue comparison.
* Daily, monthly, and seasonal sales analysis.
* Weekend versus weekday performance.
* Promotional versus non-promotional sales analysis.

### 🛍️ 3. Product & Category Analysis

* Product-level revenue and profitability analysis.
* Category-wise sales comparisons.
* Identification of top-performing products.
* Analysis of low-performing products.

### 📦 4. Inventory Intelligence

* Inventory valuation and stock-level analysis.
* Inventory turnover and days-on-hand calculations.
* Identification of slow-moving inventory.
* Overstock detection and excess inventory valuation.

### ⚠️ 5. Stockout Risk Detection

* Identification of products at risk of running out of stock.
* Comparison of current inventory with reorder points.
* Evaluation of stockout timelines against supplier lead times.
* Classification of products into CRITICAL, WARNING, and SAFE categories.

### 🔮 6. Demand Forecasting

* Revenue forecasting using time-series modeling.
* Actual versus forecast revenue visualization.
* 30-day demand outlook.
* Forecast confidence intervals.
* Category-level forecast analysis.

### 👥 7. Customer Analytics

* Customer segmentation into High Value, Regular, and Occasional groups.
* Customer revenue contribution analysis.
* Purchase frequency analysis.
* Customer behavior insights.

### 💡 8. Executive Recommendations

* Prioritized inventory recommendations.
* Identification of critical stockout risks.
* Overstock reduction opportunities.
* Revenue growth and profitability insights.
* Impact-versus-difficulty opportunity analysis.

---

## 🛠️ Technology Stack

| Technology                   | Purpose                                          |
| ---------------------------- | ------------------------------------------------ |
| Python                       | Data cleaning, preprocessing, and analysis       |
| Pandas                       | Data manipulation and transformation             |
| NumPy                        | Numerical computations                           |
| Scikit-learn / Statsmodels   | Demand forecasting and statistical modeling      |
| SQL                          | Data extraction, joining, and querying           |
| Power BI                     | Interactive dashboards and business intelligence |
| DAX                          | KPI calculations and analytical measures         |
| Power Query                  | Data transformation and preparation              |
| Excel                        | Data inspection and preparation                  |
| Git & GitHub                 | Version control and project documentation        |
| Streamlit / Power BI Service | Deployment options                               |

---

## 🏗️ System Architecture

The project follows a structured data analytics workflow, transforming raw business data into actionable business intelligence.

```text
       RAW BUSINESS DATA
  ┌─────────────────────────┐
  │ Sales                   │
  │ Products                │
  │ Inventory               │
  │ Customers               │
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │ Data Cleaning &         │
  │ Feature Engineering     │
  │ Python, Pandas, SQL      │
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │ Analytics & Modeling    │
  │ Demand Forecasting      │
  │ Stock Risk Analysis     │
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │ Power BI Data Model     │
  │ Relationships, DAX      │
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │ 12-Page Interactive     │
  │ Power BI Dashboard      │
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │ Business Insights &     │
  │ Recommendations         │
  └─────────────────────────┘
```

---

## 📂 Dashboard Pages

The Power BI report contains 12 interactive dashboard pages.

| No. | Dashboard                    | Description                                    |
| --- | ---------------------------- | ---------------------------------------------- |
| 1   | Executive Dashboard          | Overall business performance and KPIs          |
| 2   | Sales Analytics              | Revenue trends and sales performance           |
| 3   | Product Performance          | Product-level revenue and profitability        |
| 4   | Category Performance         | Category-wise sales and profit analysis        |
| 5   | Inventory Dashboard          | Stock levels, valuation, and turnover          |
| 6   | Stockout Risk                | Critical inventory and replenishment risks     |
| 7   | Overstock Dashboard          | Excess stock and slow-moving inventory         |
| 8   | Promotion Dashboard          | Promotional sales performance                  |
| 9   | Seasonality Dashboard        | Seasonal and monthly demand patterns           |
| 10  | Forecast Dashboard           | Revenue forecasting and forecast intervals     |
| 11  | Customer & Business Insights | Customer segmentation and purchasing behavior  |
| 12  | Executive Recommendations    | Prioritized business actions and opportunities |

---

## 📊 Dataset Overview

The project analyzes daily retail transactions from **January 1, 2024, to December 31, 2025**.

| Metric              |               Value |
| ------------------- | ------------------: |
| Total Revenue       |        3.10 Billion |
| Gross Profit        |        1.22 Billion |
| Gross Profit Margin |               39.4% |
| Units Sold          |             511,810 |
| Number of Products  |                  50 |
| Product Categories  |                   5 |
| Customers           | Approximately 2,000 |
| Analysis Period     |           2024–2025 |
| Dashboard Pages     |                  12 |

### Product Categories

* Home Decor
* Furniture
* Storage
* Kitchen
* Lighting

---

## 🔍 Key Business Insights

The analysis revealed several important patterns in retail sales and inventory.

### 1. Revenue Performance

* Total revenue reached approximately 3.10 billion over the analysis period.
* Revenue remained nearly flat between 2024 and 2025.
* Home Decor contributed the largest share of total revenue.

### 2. Inventory Risks

* 727 products were classified as CRITICAL for stockout risk.
* 93 products were classified as WARNING.
* 3,980 products were classified as SAFE.

### 3. Overstock Analysis

* Approximately 2.37 billion in excess inventory value was identified.
* 36 products were classified as overstocked.
* 167 products were identified as slow-moving.
* Estimated annual holding costs for excess inventory were 41.46 million.

### 4. Seasonality

* March was identified as a strong sales month.
* Sales patterns varied across seasons.
* Weekend sales contributed significantly to overall revenue.

### 5. Customer Insights

* Customers were segmented into High Value, Regular, and Occasional groups.
* Regular customers contributed approximately 1.36 billion in revenue.
* High Value customers generated the highest revenue per customer.

---

## 💡 Business Recommendations

Based on the analysis, the platform provides the following recommendations:

1. **Reorder critical products:** Prioritize products at immediate risk of stockouts.
2. **Reduce excess inventory:** Consider targeted discounts and clearance strategies.
3. **Review low-performing products:** Evaluate products with consistently low revenue.
4. **Optimize reorder levels:** Align inventory decisions with seasonal demand patterns.
5. **Focus on high-growth products:** Use sales and profitability insights to support purchasing decisions.

---

## ⚙️ Methodology

The project follows a structured analytics workflow.

**Step 1: Data Preparation**

* Cleaned sales, product, inventory, and customer data.
* Handled missing values, duplicates, and data types.
* Joined datasets using product identifiers.
* Created calendar features such as seasons, weekends, and promotions.

**Step 2: Exploratory Data Analysis**

* Analyzed revenue and sales trends.
* Examined product and category performance.
* Investigated seasonal patterns and customer behavior.

**Step 3: Demand Forecasting**

* Aggregated daily revenue.
* Developed a time-series forecasting model.
* Evaluated forecast performance using a holdout period.
* Visualized forecasts with confidence intervals.

**Step 4: Inventory Risk Analysis**

* Compared current stock against reorder points.
* Evaluated stockout timelines and supplier lead times.
* Classified stockout risk.
* Identified overstocked and slow-moving products.

**Step 5: Dashboard Development**

* Built a Power BI data model.
* Created DAX measures and KPIs.
* Designed 12 interactive dashboard pages.
* Integrated analytics and business recommendations.

---

## 📌 Challenges Faced

During development, the following challenges were addressed:

* Joining inventory records with the product master to ensure accurate category mapping.
* Aligning forecast values with actual daily revenue for meaningful comparisons.
* Writing DAX measures for ratios and KPIs that respond correctly to dashboard filters.
* Designing 12 dashboard pages while maintaining readability and consistency.

---

## 🔮 Future Scope

Potential future enhancements include:

* SKU-level demand forecasting.
* Automated reorder quantity recommendations.
* Scheduled data refresh.
* Automated alerts for critical stockout risks.
* Price and promotion optimization.
* Integration with real-time inventory systems.

---

## 📸 Dashboard Preview

Add screenshots of your Power BI dashboards here to showcase the project.

For example:

```markdown
![Executive Dashboard](screenshots/executive-dashboard.png)
![Sales Dashboard](screenshots/sales-dashboard.png)
![Inventory Dashboard](screenshots/inventory-dashboard.png)
```

Create a `screenshots` folder in your repository and upload the corresponding images.

---

## 🌐 Project Links

| Resource          | Link                                                 |
| ----------------- | ---------------------------------------------------- |
| GitHub Repository | [Project FORESIGHT](https://github.com/rinkle-YADAV) |
| Live Deployment   | Add your deployment URL                              |
| Demo Video        | Add your demo video link                             |
| Feedback Video    | Add your feedback video link                         |
| Project Report    | Add your report link                                 |

---

## 👩‍💻 Author

**Rinkle Yadav**
Data Analytics Intern

**Mentor:** Chandan Mishra

---

## 🏁 Conclusion

Project FORESIGHT demonstrates how data analytics, machine learning, and business intelligence can work together to improve retail demand planning and inventory management.

By combining demand forecasting, stockout risk detection, overstock analysis, and interactive dashboards, the platform helps transform complex retail data into practical business insights.

The project provides a foundation for more automated and data-driven inventory planning.

---

⭐ **If you find this project useful, consider giving the repository a star!**
