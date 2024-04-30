package com.equipouno.classroombe.enums;

public enum FourMonthPeriod {

	FIRST_QUARTER("Primer Cuatrimestre"), SECOND_TERM("Segundo Cuatrimestre"), ANNUAL("Anual");

	private final String value;

	private FourMonthPeriod(String value) {
		this.value = value;
	}

	public static FourMonthPeriod fromString(String value) {
		for (FourMonthPeriod period : FourMonthPeriod.values()) {
			if (period.value.equalsIgnoreCase(value)) {
				return period;
			}
		}
		return null;
	}

}
