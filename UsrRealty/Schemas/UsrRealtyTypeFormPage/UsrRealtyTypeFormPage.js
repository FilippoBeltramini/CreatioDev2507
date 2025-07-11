define("UsrRealtyTypeFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_odqhcd7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyTypeDS_Name_fhmajnw",
					"labelPosition": "above",
					"control": "$UsrRealtyTypeDS_Name_fhmajnw"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ColorPicker_ocmjmiz",
				"values": {
					"type": "crt.ColorPicker",
					"label": "$Resources.Strings.UsrRealtyTypeDS_UsrMyColor_28g2lsm",
					"labelPosition": "above",
					"control": "$UsrRealtyTypeDS_UsrMyColor_28g2lsm",
					"pickerMode": "extended"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_tux92ru",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyTypeDS_Description_839y6r2",
					"labelPosition": "above",
					"control": "$UsrRealtyTypeDS_Description_839y6r2"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyTypeDS_Name_fhmajnw": {
						"modelConfig": {
							"path": "UsrRealtyTypeDS.Name"
						}
					},
					"UsrRealtyTypeDS_UsrMyColor_28g2lsm": {
						"modelConfig": {
							"path": "UsrRealtyTypeDS.UsrMyColor"
						}
					},
					"UsrRealtyTypeDS_Description_839y6r2": {
						"modelConfig": {
							"path": "UsrRealtyTypeDS.Description"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyTypeDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyType",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyTypeDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});