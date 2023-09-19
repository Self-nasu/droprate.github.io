CREATE TABLE School_info (
    SchoolID VARCHAR(10) PRIMARY KEY,
    SchoolName VARCHAR(100),
    Area VARCHAR(1),
    City VARCHAR(50),
    Medium VARCHAR(8),
    Edu_peek INT,
    Infr_quality INT,
    Staff INT,
    School_GPA INT
);

CREATE TABLE Student_info (
    StudentID VARCHAR(15) PRIMARY KEY,
    SchoolID VARCHAR(10),
    Gender VARCHAR(7),
    DOB DATE,
    Caste VARCHAR(10),
    CGPA INT,
    Enroll_year INT,
    Dropout_Year INT,
    AadharNo INT,
    Dropout_class INT,
    School_fees DECIMAL(15, 2),
    FOREIGN KEY (SchoolID) REFERENCES School_info(SchoolID)
);

CREATE TABLE Student_Grade (
    StudentID VARCHAR(15) PRIMARY KEY,
    CGPA INT,
    Major_GPA VARCHAR(2),
    Minor_GPA VARCHAR(2),
    FOREIGN KEY (StudentID) REFERENCES Student_info(StudentID)
);

CREATE TABLE Student_family (
    StudentID VARCHAR(15) PRIMARY KEY,
    Family_income DECIMAL(25, 2),
    HQual_fam INT,
    El_bro_sis BOOLEAN,
    Family_size INT,
    FOREIGN KEY (StudentID) REFERENCES Student_info(StudentID)
);
