<template>
	<div class="form101" data-app>
		<v-container>
			<v-row class="m-0" v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="4">
					<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
				</v-col>
				<v-col cols="8" class="text-left">
					<router-link to="/newapplication" class="goto_form">+ בקשה חדשה</router-link>
				</v-col>
			</v-row>
			<div v-if="$vuetify.breakpoint.xsOnly">
				<h1 class="mobile_title">טופס 101</h1>
				<router-link to="/settings">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<form action>
			<v-container class="p-0">
				<div class="form_box">
					<v-row>
						<v-col cols="12">
							<ul class="list-inline form_progress">
								<li>
									<router-link to="/form101">טופס 101</router-link>
								</li>
								<li>
									<router-link to="/bankaccountinfo">פרטי חשבון</router-link>
								</li>
								<li>
									<router-link to="/carddetail">אשראי</router-link>
								</li>
							</ul>
						</v-col>
					</v-row>
					<div class="mobile_padding">
						<v-row>
							<v-col cols="12">
								<div class="form_title" v-if="$vuetify.breakpoint.smAndUp">
									<img src="../assets/edit.png" alt="edit" class="img-fluid" />
									<h2 class="big_title">וולקאם עדי,</h2>
									<p class="f22">
										להפעלת החשבון יש למלא טופס 101, כדי שנוכל להנפיק לך תלוש
										משכורת, ופרטי חשבון בנק בשביל לעביר לך תשלומים
									</p>
								</div>
								<h2 class="main_title mt-30">פרטים אישיים</h2>
							</v-col>
						</v-row>
						<v-row class="m-4">
							<v-col md="4" sm="6" cols="12" class="p-4">
								<label for="fname2">שם פרטי*</label>
								<v-text-field
									placeholder="השם הפרטי כפי שמופיע בתעודת הזהות"
									id="fname2"
									type="text"
									name="fname"
									solo
								></v-text-field>
							</v-col>
							<v-col md="4" sm="6" cols="12" class="p-4">
								<label for="lname">שם משפחה*</label>
								<v-text-field
									placeholder="שם המשפחה כפי שמופיע בתעודת הזהות"
									id="lname"
									type="text"
									name="lname"
									solo
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col md="12">
								<v-radio-group row>
									<v-radio label="תעודת זהות" value="תעודת זהות"></v-radio>
									<v-radio label="דרכון (לאזרח זר)" value="דרכון (לאזרח זר)"></v-radio>
								</v-radio-group>
							</v-col>
						</v-row>
						<v-row class="m-4">
							<v-col md="3" sm="6" cols="12" class="p-4">
								<label for="fname1">שם פרטי*</label>
								<v-text-field
									placeholder="השם הפרטי כפי שמופיע בתעודת הזהות"
									id="fname1"
									type="text"
									name="fname"
									solo
								></v-text-field>
							</v-col>
							<v-col md="auto" sm="6" cols="12" class="p-4">
								<label for="lname">* יש לצרף צילום ת.ז וספח</label>
								<label for="upload" class="btn_filled btn_upload">
									העלאת קבצים
									<img src="../assets/upload.png" alt="download" class="img-fluid" />
								</label>
								<input type="file" id="upload" hidden />
							</v-col>
						</v-row>
						<div class="border_gray mt-20" v-if="$vuetify.breakpoint.xsOnly"></div>
						<v-row class="m-4" v-if="$vuetify.breakpoint.smAndUp">
							<v-col md="4" sm="6" cols="12" class="p-4">
								<v-menu
									ref="dialog1"
									v-model="picker1"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<label for="bdate">תאריך לידה*</label>
										<v-text-field class="datepicker" v-model="date" id="bdate" readonly v-on="on" solo></v-text-field>
									</template>
									<v-date-picker v-model="date" no-title @input="picker1 = false" scrollable></v-date-picker>
								</v-menu>
							</v-col>
							<v-col md="4" sm="6" cols="12" class="p-4">
								<label for="idate">תאריך עלייה</label>
								<v-menu
									v-model="picker"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field class="datepicker" v-on="on" v-model="date1" id="bdate1" readonly solo></v-text-field>
									</template>
									<v-date-picker v-model="date1" @input="picker = false" no-title scrollable></v-date-picker>
								</v-menu>
							</v-col>
						</v-row>
						<h2 class="main_title mt-20" v-if="$vuetify.breakpoint.xsOnly">תאריך לידה</h2>
						<v-row class="m-4" v-if="$vuetify.breakpoint.xsOnly">
							<v-col cols="4" class="p-4">
								<label for="day">יום</label>
								<v-select :items="dayarr" id="day" solo></v-select>
							</v-col>
							<v-col cols="4" class="p-4">
								<label for="month">חודש</label>
								<v-select :items="montharr" id="month" solo></v-select>
							</v-col>
							<v-col cols="4" class="p-4">
								<label for="year">שנה</label>
								<v-select :items="yeararr" id="year" solo></v-select>
							</v-col>
						</v-row>
						<div class="border_gray" v-if="$vuetify.breakpoint.xsOnly"></div>
						<v-row class="mt-10" v-if="$vuetify.breakpoint.xsOnly">
							<v-col md="12">
								<v-radio-group row>
									<v-radio label="נולדתי בישראל" value="נולדתי בישראל"></v-radio>
									<v-radio label="עליתי לישראל" value="עליתי לישראל"></v-radio>
								</v-radio-group>
							</v-col>
						</v-row>
						<h2 class="main_title mt-20" v-if="$vuetify.breakpoint.xsOnly">תאריך עלייה</h2>
						<v-row class="m-4" v-if="$vuetify.breakpoint.xsOnly">
							<v-col cols="4" class="p-4">
								<label for="day1">יום</label>
								<v-select :items="dayarr" id="day1" solo></v-select>
							</v-col>
							<v-col cols="4" class="p-4">
								<label for="month1">חודש</label>
								<v-select :items="montharr" id="month1" solo></v-select>
							</v-col>
							<v-col cols="4" class="p-4">
								<label for="year1">שנה</label>
								<v-select :items="yeararr" id="year1" solo></v-select>
							</v-col>
						</v-row>
						<v-row class="m-4" v-if="$vuetify.breakpoint.smAndUp">
							<v-col cols="3" md="3" sm="6" class="p-4">
								<label for="settlement">ישוב*</label>
								<v-select :items="selection" id="settlement" solo></v-select>
							</v-col>
							<v-col cols="3" md="3" sm="6" class="p-4">
								<label for="street">רחוב*</label>
								<v-select :items="selection" id="street" solo></v-select>
							</v-col>
							<v-col md="2" cols="12" sm="6" class="p-4">
								<label for="homenum">מס’ בית*</label>
								<v-text-field id="homenum" type="text" name="homenum" solo></v-text-field>
							</v-col>
							<v-col md="auto" cols="12" sm="6" class="p-4">
								<label for="code">מיקוד*</label>
								<v-text-field id="code" type="text" name="code" solo></v-text-field>
								<p class="postcode_text">
									לאיתור מיקוד ניתן להיעזר
									<a href="#" class="link">באתר הדואר</a>
								</p>
							</v-col>
						</v-row>
						<div class="border_gray mt-10" v-if="$vuetify.breakpoint.xsOnly"></div>
						<h2 class="main_title mt-20" v-if="$vuetify.breakpoint.xsOnly">כתובת</h2>
						<div class="mt-10" v-if="$vuetify.breakpoint.xsOnly">
							<v-row class="m-4">
								<v-col cols="12" class="p-4">
									<label for="locality">יישוב</label>
									<v-select :items="locality" id="locality" solo></v-select>
								</v-col>
							</v-row>
							<v-row class="m-4">
								<v-col cols="8" class="p-4">
									<label for="street">רחוב</label>
									<v-select :items="street" id="street" solo></v-select>
								</v-col>
								<v-col cols="4" class="p-4">
									<label for="homenum">מס׳ בית</label>
									<v-text-field id="homenum" type="text" name="homenum" solo></v-text-field>
								</v-col>
							</v-row>
							<v-row class="m-4">
								<v-col cols="5" class="p-4">
									<label for="code">מיקוד</label>
									<v-text-field id="code" type="text" name="code" solo></v-text-field>
								</v-col>
								<v-col cols="5" class="p-4">
									<p class="postcode_text">
										<a href="#" class="link">אתר מיקוד</a>
									</p>
								</v-col>
							</v-row>
						</div>
						<v-row class="m-4">
							<v-col md="3" sm="6" class="p-4">
								<label for="mobile">טלפון סלולרי*</label>
								<v-text-field placeholder="מספר הטלפון שברשותך" id="mobile" type="text" name="phone" solo></v-text-field>
							</v-col>
						</v-row>
						<div class="border_gray mt-10" v-if="$vuetify.breakpoint.xsOnly"></div>
						<v-row class="m-4 multiple_selection">
							<v-col md="auto" cols="12" sm="4" class="p-4">
								<label class="pr-0">מין*</label>
								<v-radio-group v-model="radioGroup" class="mt-10">
									<v-radio label="זכר" value="זכר"></v-radio>
									<v-radio label="נקבה" value="נקבה"></v-radio>
								</v-radio-group>
							</v-col>
							<v-col md="auto" cols="12" sm="4" class="p-4">
								<label class="pr-0">מצב משפחתי*</label>
								<v-radio-group v-model="radioGroup1" class="mt-10">
									<v-radio label="רווק/ה" value="רווק/ה"></v-radio>
									<v-radio label="נשוי/אה" value="נשוי/אה"></v-radio>
									<v-radio label="גרוש/ה" value="גרוש/ה"></v-radio>
									<v-radio label="אלמן/ה" value="אלמן/ה"></v-radio>
									<v-radio label="פרוד/ה" value="פרוד/ה"></v-radio>
								</v-radio-group>
							</v-col>
							<v-col md="auto" cols="12" sm="4" class="p-4">
								<label class="pr-0">תושב ישראל*</label>
								<v-radio-group v-model="radioGroup2" class="mt-10">
									<v-radio label="כן" value="כן"></v-radio>
									<v-radio label="לא" value="לא"></v-radio>
								</v-radio-group>
							</v-col>
							<v-col md="auto" cols="12" sm="4" class="p-4">
								<label class="pr-0">*חבר קיבוץ/ מושב שיתופי</label>
								<v-radio-group v-model="radioGroup3" class="mt-10">
									<v-radio label="כן" value="כן"></v-radio>
									<v-radio label="לא" value="לא"></v-radio>
								</v-radio-group>
							</v-col>
							<v-col md="auto" cols="12" sm="5" class="p-4">
								<label class="pr-0">*חבר בקופת חולים</label>
								<v-radio-group v-model="radioGroup4" class="mt-10">
									<v-radio label="כללית" value="כללית"></v-radio>
									<v-radio label="מכבי" value="מכבי"></v-radio>
									<v-radio label="לאומית" value="לאומית"></v-radio>
									<v-radio label="מאוחדת" value="מאוחדת"></v-radio>
									<v-radio label="איני חבר/ת קופת חולים" value="איני חבר/ת קופת חולים"></v-radio>
								</v-radio-group>
							</v-col>
							<v-col md="auto" cols="12" class="p-4" v-if="$vuetify.breakpoint.xsOnly">
								<label class="pr-0">
									ילדים
									<span>
										אין חובת דיווח
										על ילדים מעל גיל 19
									</span>
								</label>
								<v-radio-group v-model="radioGroup4" class="mt-10">
									<v-radio label="יש לי " value="יש לי "></v-radio>
									<v-radio label="אין לי " value="אין לי "></v-radio>
								</v-radio-group>
							</v-col>
						</v-row>
					</div>
				</div>
				<div class="form_box">
					<v-row v-if="$vuetify.breakpoint.smAndUp">
						<v-col cols="12">
							<h2 class="main_title">פרטים על ילדיך שטרם מלאו להם 19</h2>
						</v-col>
					</v-row>
					<div class="baby_box mt-20" v-for="(data_row,index) in datarows" :key="index">
						<v-row class="align-center m-4">
							<v-col sm="auto" cols="12" class="pb-0">
								<h2 class="f20">
									<img src="../assets/baby.png" alt="baby" class="img-fluid vmiddle ml-10" width="40" />
									ילד/ה
								</h2>
							</v-col>
							<v-col md="4" sm="4" cols="12" class="p-4 py-0">
								<label>שם פרטי*</label>
								<v-text-field
									placeholder="השם הפרטי כפי שמופיע בתעודת הזהות"
									type="text"
									solo
									v-model="data_row.firstName"
								></v-text-field>
							</v-col>
							<v-col md="4" sm="4" cols="12" class="p-4 py-0">
								<label>שם משפחה*</label>
								<v-text-field
									placeholder="שם המשפחה כפי שמופיע בתעודת הזהות"
									type="text"
									v-model="data_row.lastName"
									solo
								></v-text-field>
							</v-col>
							<v-col sm="2" cols="12" class="p-4 py-0">
								<label for="idate">תאריך לידה*</label>
								<v-menu
									v-model="data_row.menu"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field class="datepicker" v-model="data_row.pickeddate" readonly v-on="on" solo></v-text-field>
									</template>
									<v-date-picker
										v-model="data_row.pickeddate"
										@input="data_row.menu = false"
										no-title
										scrollable
									>
										<v-spacer></v-spacer>
									</v-date-picker>
								</v-menu>
							</v-col>
							<v-col sm="auto" cols="12" class="pb-0">
								<img
									src="../assets/close.png"
									alt="close"
									class="img-fluid vmiddle close ml-10"
									width="40"
									@click="deleteEvent(data_row)"
								/>
							</v-col>
						</v-row>
					</div>
					<button type="button" class="btn_filled btn_add" @click="addRow()">+ הוספת ילד</button>
				</div>
				<div class="form_box" v-if="$vuetify.breakpoint.smAndUp">
					<h2 class="main_title">פרטים על הכנסות נוספות</h2>
					<v-row class="mt-10">
						<v-col md="12" class="pb-0">
							<v-radio-group row>
								<v-radio label="אין לי הכנסות נוספות ו /או מלגות" value="אין לי הכנסות נוספות ו /או מלגות"></v-radio>
								<v-radio label="יש לי הכנסות נוספות " value="יש לי הכנסות נוספות "></v-radio>
							</v-radio-group>
						</v-col>
					</v-row>
				</div>
				<div class="mobile_padding">
					<div class="form_box fourthbox">
						<h2 class="main_title">תיאום מס</h2>
						<v-row class="mt-10">
							<v-col md="12" class="pb-0 text-right">
								<v-radio-group>
									<v-radio label="אין לי צורך בתיאום מס" value="אין לי צורך בתיאום מס"></v-radio>
									<v-radio value="radio-1">
										<template slot="label" class="text-right">
											ביצוע תיאום מס
											<br v-if="$vuetify.breakpoint.xsOnly" />(בתשלום חד פעמי שנתי של 50 שח + מע”מ)
											<!-- <button class="btn_filled btn_upload">
												העלאת קבצים
												<img src="../assets/upload.png" class="img-fluid" alt="upload" />
											</button>-->
										</template>
									</v-radio>
									<label for="upload1" class="btn_filled btn_upload">
										העלאת קבצים
										<img src="../assets/upload.png" alt="download" class="img-fluid" />
									</label>
									<input type="file" id="upload1" hidden />
									<v-radio value="radio-2">
										<template slot="label">
											העלאת תיאום מס שכבר ביצעתי
											<!-- <button class="btn_filled btn_upload">
												העלאת קבצים
												<img src="../assets/upload.png" class="img-fluid" alt="upload" />
											</button>-->
										</template>
									</v-radio>
									<label for="upload2" class="btn_filled btn_upload">
										העלאת קבצים
										<img src="../assets/upload.png" alt="download" class="img-fluid" />
									</label>
									<input type="file" id="upload2" hidden />
								</v-radio-group>
							</v-col>
						</v-row>
					</div>
					<div class="border_gray mt-10" v-if="$vuetify.breakpoint.xsOnly"></div>
					<div class="form_box lastbox" v-if="$vuetify.breakpoint.smAndUp">
						<h2 class="main_title">הצהרה</h2>
						<v-row class="mt-10">
							<v-col md="12" class="pb-0">
								<v-checkbox
									v-model="checkbox"
									label=" אני מצהיר/ה כי הפרטים שמסרתי בטופס זה הינם מלאים ונכונים. ידוע לי שהשמטה או מסירת פרטים לא נכונים הינה עבירה על פקודת מס הכנסה. אני מתחייב/ת להודיע למעביד על כל שינוי שיחול בפרטיי האישיים ובפרטים דלעיל תוך שבוע ימים מתאריך השינוי."
								></v-checkbox>
							</v-col>
						</v-row>
					</div>
					<button type="submit" class="btn_filled btn_send" @click="()=>$router.push('bankaccountinfo')">
						<span v-if="$vuetify.breakpoint.smAndUp">שלח והמשך לפרטי חשבון בנק</span>
						<span v-if="$vuetify.breakpoint.xsOnly">סיום</span>
					</button>
					<div class="navigation">
						<router-link to="/form101"></router-link>
						<router-link to="/bankaccountinfo"></router-link>
						<router-link to="/carddetail"></router-link>
						<router-link to="/profile"></router-link>
					</div>
				</div>
			</v-container>
		</form>
	</div>
</template>


<script>
	// @ is an alias to /src

	export default {
		name: "Form101",
		components: {},
		data() {
			return {
				datarows: [
					{
						firstName: "",
						lastName: "",
						menu: false,
						pickeddate: ""
					}
				],
				radioGroup: false,
				radioGroup1: false,
				radioGroup2: false,
				radioGroup3: false,
				radioGroup4: false,
				checkbox: false,
				date: null,
				picker: false,
				date1: null,
				picker1: false,
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					},
					{
						text: "הגדרות",
						disabled: false,
						href: "/settings"
					},
					{
						text: " טופס 101",
						disabled: true,
						href: "/"
					}
				],
				selection: ["סוג החברה 1", "סוג החברה 2", "סוג החברה 3"],
				selection1: ["עיר 1", "עיר 2", "עיר 3"],
				selection2: ["רחוב 1", "רחוב 2", "רחוב 3"],
				locality: [],
				montharr: [],
				dayarr: [],
				yeararr: [],
				street: []
			};
		},
		methods: {
			addRow() {
				this.datarows.push({
					firstName: "",
					lastName: "",
					menu: false,
					pickeddate: ""
				});
			},
			deleteEvent(table_data) {
				let index = this.datarows.indexOf(table_data);
				this.datarows.splice(index, 1);
			}
		}
	};
</script>

<style scoped>
	.form_title {
		margin-top: 0;
	}
	.form_title .big_title {
		margin-top: 10px;
	}
	.btn_send {
		max-width: 400px;
		height: 65px;
		line-height: 65px;
		border-radius: 50px;
		margin: 50px auto 0;
	}
	.baby_box:not(:nth-child(2)) label {
		display: none;
	}
	.baby_box:not(:nth-child(2)) .col-sm-auto {
		padding-top: 0;
		margin-top: -15px;
	}
	.btn_add {
		width: 200px;
	}
	.baby_box .col-md-4 {
		-webkit-box-flex: 0;
		-ms-flex: 0 0 32%;
		flex: 0 0 32%;
		max-width: 32%;
	}
	.postcode_text {
		font-size: 18px;
		font-weight: 600;
	}
	.postcode_text a {
		text-decoration: none;
		color: #00e1db;
	}
	.f22 {
		font-size: 22px;
		padding-bottom: 8px;
		border-bottom: 1px solid #06d7dd;
		display: inline-block;
	}
	.form_box {
		border: 1px solid #979797;
		background-color: #ffffff;
		box-shadow: 0 -1px 18px rgba(87, 73, 107, 0.16);
		padding: 30px 45px 35px;
		border-radius: 30px;
		margin-bottom: 20px;
	}
	.navigation {
		margin-bottom: 200px;
	}
	.form_btn .btn_gray {
		width: 120px;
	}
	.form_btn .btn_filled {
		width: 200px;
	}
	.form_title img {
		bottom: 0;
	}
	.btn_upload {
		margin: 0;
		height: 48px;
		line-height: 48px;
	}
	.btn_upload img {
		width: 25px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.fourthbox .btn_upload {
		width: 210px;
		padding: 0 20px;
		margin-right: 15px;
		margin-bottom: 20px;
	}
	.lastbox .v-input--checkbox {
		text-align: right;
	}
	.multiple_selection .col-md-auto.col-12 {
		padding-left: 50px !important;
	}
	.baby_box .close {
		cursor: pointer;
	}
	@media (max-width: 1279px) {
		.f22 {
			font-size: 16px;
		}
		.multiple_selection .col-md-auto.col-12 {
			padding-left: 16px !important;
		}
		.baby_box .col-md-4,
		.baby_box .col-sm-2 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 25%;
			flex: 0 0 25%;
			max-width: 25%;
		}
	}
	@media (max-width: 959px) {
		.baby_box {
			background: #f3f3f3;
			margin-bottom: 10px;
			border-radius: 15px;
			padding: 20px 30px 10px;
			position: relative;
		}
		.baby_box .col-md-4,
		.baby_box .col-sm-2 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 100%;
			flex: 0 0 100%;
			max-width: 100%;
		}
		.baby_box .close {
			position: absolute;
			top: 32px;
			left: 22px;
		}
		.baby_box .f20 {
			margin-bottom: 20px;
		}
		.baby_box:not(:nth-child(2)) .col-sm-auto {
			padding-top: 12px;
			margin-top: 0;
		}
		.baby_box:not(:nth-child(2)) label {
			display: block;
		}
	}
	@media (max-width: 767px) {
		.form_box {
			padding: 12px 20px 20px;
			border-radius: 12px;
		}

		.multiple_selection .col-sm-5 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 50%;
			flex: 0 0 50%;
			max-width: 50%;
		}
		.f22 {
			font-size: 11px;
		}
	}
	@media (max-width: 599px) {
		form > .container {
			box-shadow: 0 5px 18px rgba(0, 0, 0, 0.34);
			padding: 20px 15px !important;
			border-radius: 40px 40px 0 0;
			margin-top: -85px;
			z-index: 99;
			position: relative;
			background: #fff;
		}
		.form_box {
			border-radius: 0;
			border: 0;
			box-shadow: none;
			padding: 0;
		}
		.baby_box {
			padding: 10px 15px 0;
			position: relative;
		}
		.baby_box .close {
			top: 22px;
			left: 5px;
		}
		.mobile_padding {
			padding: 0 15px;
		}
		.btn_upload {
			font-size: 16px;
			text-align: right;
			padding: 0 20px;
		}
		.btn_upload img {
			float: left;
			margin-top: 13px;
		}
		.postcode_text a {
			background-color: #ffffff;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.17);
			height: 46px;
			display: block;
			border-radius: 50px;
			text-align: center;
			color: #313131;
			line-height: 46px;
			margin-top: 25px;
		}
		.multiple_selection .col-sm-5 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 100%;
			flex: 0 0 100%;
			max-width: 100%;
		}
		.multiple_selection .col-12 {
			display: flex;
			border-bottom: 1px solid rgba(49, 49, 49, 0.2);
		}
		.multiple_selection .col-12:last-child {
			border-bottom: 0;
		}
		.multiple_selection .col-12 > label {
			font-size: 15px !important;
			font-weight: 700;
			min-width: 100px;
			max-width: 100px;
			margin-top: 12px;
			padding-right: 0 !important;
		}
		.multiple_selection label span {
			font-size: 10px;
			display: block;
		}
		.form_box .v-radio {
			margin-right: 0 !important;
			margin-left: 15px !important;
		}
		.btn_add {
			width: 160px;
			margin: 20px auto 0;
		}
		.fourthbox label button,
		.fourthbox .v-radio + label {
			display: none;
		}
		.p-4 {
			padding: 0 4px 0 !important;
		}
		.multiple_selection .col-md-auto.col-12 {
			padding: 4px 4px 8px !important;
		}
		.form_box .main_title.mt-30 {
			margin-top: 15px;
		}
		.navigation {
			margin-bottom: 30px;
		}
	}
</style>
