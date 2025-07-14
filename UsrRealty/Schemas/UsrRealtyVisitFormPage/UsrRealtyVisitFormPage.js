define("UsrRealtyVisitFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_f2kuxed",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrVisitDateTime_9z4jthe",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrVisitDateTime_9z4jthe"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_rmlkcq1",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrComment_mw369kg",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrComment_mw369kg"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_besanlm",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrPotentialCustomer_6rh1ia1",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrPotentialCustomer_6rh1ia1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_3qvncd5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3qvncd5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_besanlm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_3x8w4cv",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitDS_UsrManager_z6lilqz",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitDS_UsrManager_z6lilqz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_jbe0agi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jbe0agi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3x8w4cv",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitDS_UsrVisitDateTime_9z4jthe": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitDS_UsrPotentialCustomer_6rh1ia1": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyVisitDS_UsrManager_z6lilqz": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrManager"
						}
					},
					"UsrRealtyVisitDS_UsrComment_mw369kg": {
						"modelConfig": {
							"path": "UsrRealtyVisitDS.UsrComment"
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
						"UsrRealtyVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisit",
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
					"primaryDataSourceName": "UsrRealtyVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});