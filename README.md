# candidate-00X-konnectimpact-module-prince

## **Project Overview**
This is a **Redemption & Donation Form** for KonnectImpact.com, fulfilling Module 4 requirements from Alatree Ventures. The form allows users to:
- Select a reward (dropdown)
- Enter quantity
- Redeem loyalty points
- See visual feedback (success/error messages)

## **Key Features**
✅ **Brand-Compliant Design**  
- Teal (#00897B) and lime (#CDDC39) color scheme  
- Montserrat (headings) and Roboto (body) fonts  
- Card-based layout with soft shadows  

✅ **Functional Requirements**  
- Form validation (required fields)  
- Mock API POST to `/api/redeem` with payload:  
  ```json
  {
    "reward": "Selected Reward",
    "quantity": 2,
    "userId": 123
  }
  ```
- Success/error handling with UI feedback   

## **Setup Instructions**

### **1. Local Development**
```bash
# Clone repository
git clone https://github.com/your-username/konnectimpact-module4.git

# Open project
cd konnectimpact-module4

# Launch in browser (no build needed)
open index.html
```

## **Testing Guide**
### **1. Verify Form Submission**
1. Select a reward from dropdown  
2. Enter quantity (≥1)  
3. Submit and check:  
   - Browser console logs mock payload  
   - UI shows success/error message  

### **2. Force Test Cases**
Modify `script.js` to test:  
```javascript
// Force SUCCESS
if (true) { ... }

// Force ERROR
if (false) { ... }
```

## **File Structure
```
├── index.html          # Main UI
├── styles.css          # Brand-compliant styling
├── script.js           # Form logic & mock API
└── README.md          # This file
