# 🌾 Irrigation Advisory System for Sugarcane Crop 
**Use Case ID:** `KJS-AGR-01` | **AI Application Vertical:** `Agriculture`

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![AI Domain](https://img.shields.io/badge/Domain-AI%20%26%20IoT-blue)
![Collaboration](https://img.shields.io/badge/Partner-KIAAR%20%7C%20GBL-orange)

## 📖 About the Project
An AI-driven irrigation advisory system that integrates field sensors, weather forecasts, geospatial information, and machine learning models to provide plot-specific irrigation recommendations and decision support to sugarcane farmers. 

**Collaborating Organizations:** 
* K J Somaiya Applied Agricultural Research (KIAAR), Sameerwadi, Karnataka 
* Godavari Biorefineries Ltd. (GBL)

### Farmer registration validation

`registration.html` loads the bundled jQuery 4.0.0 library from
`js/vendor/jquery-4.0.0.min.js`, followed by `js/registration-validation.js`.
The library's MIT license is included in `js/vendor/jquery-LICENSE.txt`.
These files deploy with the static website and require no build step or external CDN.

The form checks required fields, names, Indian mobile numbers, email addresses,
Plot IDs such as `PLOT-A`, selections, soil moisture from 0 to 100, and registration
dates up to the user's local current date. It displays all errors on submit,
updates errors while editing, and clears validation state when reset.
Valid input displays a ready-to-submit message; registration storage and server
submission are not implemented.

**Beneficiaries:**
* 🚜 **18,000–25,000 Sugarcane Farmers** associated with GBL and KIAAR
* 👨‍🌾 **Cane Department Supervisors** & Field Assistants
* 🔬 **Agricultural Researchers** & Agronomists
* 🏭 **Sugar Factory Management** (for planning cane availability and productivity)

---

## ⚠️ Problem Statement
Sugarcane cultivation is highly water-intensive. Currently, irrigation scheduling is largely based on farmers’ experience rather than scientific data. This lack of precise knowledge regarding crop water requirements, soil moisture, and weather forecasts leads to over-irrigation or delayed irrigation, resulting in:
* Water wastage and increased energy consumption.
* Yield loss due to moisture stress and reduced crop productivity.
* Nutrient losses due to improper fertigation.
* Inefficient use of agricultural electricity.
* Difficulty in monitoring thousands of spatially distributed farms.

## 🎯 Objectives
1. **Develop an AI-enabled advisory system** integrating field data, weather, and crop requirements.
2. **Monitor field conditions** using IoT sensor networks and geospatial technologies for precision management.
3. **Generate plot-specific recommendations** for irrigation and fertigation to optimize resources.
4. **Deploy farmer-friendly digital platforms** (Web/Mobile) for visualization and decision support.
5. **Enhance water use efficiency** and improve the climate resilience of sugarcane farming.

---

## 🧠 Solution Approach & AI Models
The system integrates diverse data sources—IoT Sensors, Geospatial Data, Weather Data, and Farm Information—to feed into specialized predictive AI models:

* **Predictive Models:** Next Irrigation Date, Irrigation Duration, Crop Water Requirement, Yield Prediction.
* **Risk & Alert Models:** Water Stress Probability, Yield Loss (due to delayed irrigation), Disease Forecasting.
* **Optimization Models:** Rainfall-Adjusted Irrigation, Pump Scheduling, Fertigation Recommendations.
* **Generative AI:** Farmer-Friendly Advisory Generation Model (LLM-Based) for multilingual support.

### ⚙️ High-Level Workflow
| Stage | Activities | Key Technologies & Departments |
|---|---|---|
| **1. Data Acquisition** | Sensor deployment, IoT devices, data collection. | Embedded systems, edge devices, IoT gateways (EXTC, ECE, CCE, RAI). |
| **2. Data Integration** | Cloud connectivity, APIs, database creation. | Cloud infrastructure, middleware, agricultural workflows (IT, CE, CSBS). |
| **3. Pre-processing** | Data cleaning, normalization, feature extraction. | Data pipelines, automated frameworks (IT, CE, AI&DS). |
| **4. AI Analytics** | ML/DL modeling for irrigation, stress, yield, and scheduling. | Intelligent algorithms, AI inference frameworks (IT, CE, AI&DS, RAI). |
| **5. Decision Support** | Rule-based recommendations, workflow optimization. | Business logic, predictive analytics (IT, CE, AI&DS, CSBS). |
| **6. GenAI Advisory Layer** | Converting predictions into farmer-friendly advisories via LLMs. | Multilingual NLP, Chatbots, API interfaces (IT, CE, AI&DS). |
| **7. Dashboard/App** | Web/Mobile interfaces, GIS map visualization. | Full-stack development, UX, reporting systems (IT, CE, CSBS). |
| **8. Smart Automation** | Automated pump operation and scheduling. | Embedded controllers, remote monitoring (ECE, EXTC, RAI, CCE). |
| **9. Farmer Support** | App notifications, conversational AI, dissemination. | Personalized recommendations, service workflows (IT, CE, AI&DS, CSBS). |
| **10. Continuous Learning** | Feedback loops, model retraining, system scalability. | Adaptive AI, cloud monitoring, performance optimization (IT, CE, RAI). |

---

## 📦 Expected Outputs
* 📡 IoT System for continuous data acquisition.
* 🤖 AI-enabled irrigation advisory platform with a real-time recommendation engine.
* 📱 Multilingual farmer dashboard and mobile application.
* 📊 Multi-source integrated agricultural data repository.
* 💬 LLM-based multilingual advisory and alert module.

---

## 🛡️ AI Governance & Paradigms
| Area | Relevance | Implementation Focus |
|---|---|---|
| **Privacy & Data Protection** | High | Role-based access, encryption, data anonymization, DPDP Act compliance. |
| **AI Security** | High | Protection against cyber threats, secure APIs, model validation, audit logs. |
| **Responsible AI** | High | Transparent, unbiased models across regions/soil types. |
| **GenAI / LLMs** | High | Multilingual advisories (English, Kannada, Marathi, Hindi). |
| **Agentic AI** | Med-High | Autonomous analysis for proactive alerts and scheduling. |
| **Human-in-the-Loop** | High | Expert validation (agronomists) and manual overrides for farmers. |
| **Regulatory Compliance** | Med-High | Adherence to national AI, geospatial, and IoT standards. |

---

## 🚧 Operational Challenges
* **Hardware/Sensors:** Calibration, battery life, data communication failures.
* **AI/Data:** Limited labeled datasets, seasonal variability, model generalization across diverse soil types.
* **Geospatial & Weather:** Accurate dynamic plot mapping, reliability of micro-climatic rainfall forecasts.
* **Implementation:** Rural internet connectivity, farmer trust/adoption, scalability to 25,000 farms.

---

## 🎓 Curriculum Integration Mapping

### Program-wise AI Use Case Mapping (KJSIT & KJSSE)
* **Mapped Programs:** Information Technology (IT), Computer Engineering (CE), Artificial Intelligence & Data Science (AI&DS), Electronics & Telecommunication (EXTC), Computer & Communication Engineering (CCE), Electronics & Computer Engineering, Computer Science & Business Systems (CSBS), Robotics & Artificial Intelligence (RAI).

### Course-level Integration Example (Computer Engineering - KJSSE)
| Course | Contribution to Use Case | Integration Mode |
|---|---|---|
| **DBMS** | Design and implementation of the agricultural database. | Case study, lab experiments, IA tool. |
| **Web Development Lab** | Frontend interfaces for farmer dashboards. | - |
| **Software Engineering** | System architecture and requirement mapping. | - |
| **Software Testing & QA** | Design, develop, and execute test cases for the platform. | Lab experiments, IA tool (Focus on Mod 2 & 3). |

---

## 👥 Project Team (Inter-disciplinary Faculty Committee)

**Faculty Owners:**
* **Dr. Shyamal Virnodkar** (PI) - Professor, Dept. of Computer Engineering, KJSIT
* **Dr. Radhika Kotecha** - Professor, Dept. of Information Technology, KJSIT
* **Dr. Ninad Mehendale** - Associate Professor, Dept. of Electronics Engineering, KJSSE

**Team Members:**
* **Dr. Umesh Shinde** - Associate Professor, Dept. of Basic Science and Humanities, KJSIT
* **Dr. Dinesh Auti** - Assistant Professor, Dept. of Electronics Engineering, KJSSE
* **Dr. Balwant Singh** - Assistant Professor, Dept. of Electronics Engineering, KJSSE

*(Note: Program-level and Course-wise Integration Coordinators are maintained internally based on current semester assignments.)*
