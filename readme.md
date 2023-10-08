
# Student Dropout Rate Analysis For School Education

#### PS Code: SIH1362
#### Team Name: Tech Geeks SPSU
#### Team Leader: Naman Jain

### Problem Statement
Right to education is a key concern for the government and at school level, dropout ratio is high due to poverty and socio-economic reasons.
If the government has dropout student analysis on following different categories, it will be very useful in framing different policies. 
- School wise
- Area wise
- Gender wise
- Caste wise
- Age wise

#### Expected Output: 
- Focused interventions on the high dropout rates

## Important Links / image's 

#### **ML Model Working Explained -**

[![Video Thumbnail](https://media.discordapp.net/attachments/1160441694228070421/1160442056964067398/Tech_Geeks.png?ex=6534ace2&is=652237e2&hm=e09ee2267d808ddcff3928b73e0ab0d2a87d4e7f87b50df1586e0115375871a)](https://drive.google.com/file/d/1cUEzTOVvPbsDY5DWHBTTbBJMkv_LLgNb/view?usp=sharing)

#### **Database Schema**

![Database Schema](https://media.discordapp.net/attachments/1160441694228070421/1160442857417621545/other_pages.png?ex=6534ada1&is=652238a1&hm=99f58db18ee7f3ef4c80b3b6ca085f1767b6b4138fe5ce6ee7ba4d77c4173421&=&width=1402&height=662)

#### **Tech Stack**

![Tech stack](https://media.discordapp.net/attachments/1160441694228070421/1160443285186289784/1page.png?ex=6534ae07&is=65223907&hm=847c52a16af309f29c5a2ba5564c0864414539a421c2dd08171914e93d3bb94f&=&width=1177&height=662)




### Background Research & Current Limitation 

- School dropout rates are a pressing concern with particular focus on states like Gujarat and Bihar, where dropout rates have been notably high.

- Existing annual reports from UDISE provide general school data analysis on dropout rates, offering a foundational understanding.

- However a more actionable analysis is required to identify specific factors causing dropout and purpose targeted Analysis. 

### Our Approach

- Initiated analysis using diverse school education-related data categories from UDISE.
- Explored primary factors affecting dropout rates, focusing on infrastructure, academics, and socio-economic factors.
- Developed educated assumptions to guide targeted analysis and investigation.
- Utilized data mining tools to extract insights. 

## PROPOSED SOLUTION

## Overview
Our proposed solution aims to address the critical issue of high dropout rates in schools across Gujarat. We will develop a ML-powered solution that can predict dropout rates and recommend targeted interventions to reduce dropout rates effectively.

## Steps

### 1. **Data Collection and Preparation**
   - Gather comprehensive datasets containing student information, school details, academic performance, family backgrounds, and dropout records.
   - Preprocess the data, handle missing values, and encode categorical features into numerical values for machine learning compatibility.

### 2. **Feature Selection**
   - Identify key features that could significantly influence dropout rates, such as school infrastructure, academic performance, family income, etc.

### 3. **Model Selection and Training**
   - Chose a suitable machine learning model i.e. decision tree, due to its interpretability and relevance to this problem.
   - We will Train the ML model using the preprocessed dataset with identified features to predict dropout probabilities.

### 4. **Prediction and Intervention Recommendations**
   - After we get major and minor (sub) factors affecting the dropout rates we will be using decision making algorithm which will undergo searching for the available goverment scheme in goverment database for student and will suggest us the best scheme that can be implemented for the reducuction in dropout rates.

## Conclusion
By employing this solution, we aim to significantly reduce dropout rates in schools, providing a conducive environment for students to thrive academically and contribute positively to society.

## CHALLENGES & LIMITATIONS

- While Scaling this project to real life we can encounter many other fields and attribute of data which we have not included so there can be increase in error percentage in our ML model.
- This ML model can not accurately detect the Psychological reasons of dropout.
- There will be some school which are not collecting these data properly on there basis.

## FUTURE SCOPE

- We can suggest government to add some more field of data in UDISE form which can help further to improve the analysis.
- Making this Portal generalized for Sub municipal corporations for area level analysis of there schools.
- Also we can use AI for detecting Psychological causes.
