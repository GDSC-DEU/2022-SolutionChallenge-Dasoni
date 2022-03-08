package com.gdsc.backend.entity.enums;

public enum StateType {
    PREGNANT("Unmarried_pregnant"),
    MOTHER("Unmarried_mother"),
    FATHER("Unmarried_father");

    private String value;

    StateType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
