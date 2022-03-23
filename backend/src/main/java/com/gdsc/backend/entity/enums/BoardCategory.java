package com.gdsc.backend.entity.enums;

public enum BoardCategory {
    Financial("금융지원"),
    Housing("거주지원"),
    MedicalCare("의료지원");

    private String value;

    BoardCategory(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
