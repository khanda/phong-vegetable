import _ from 'lodash'
import t from 'tcomb-form-native';

// MATERIAL DESIGN
const materialDesign = _.cloneDeep(t.form.Form.stylesheet);
materialDesign.textbox.normal.borderWidth = 0;
materialDesign.textbox.error.borderWidth = 0;
materialDesign.textbox.normal.marginBottom = 0;
materialDesign.textbox.error.marginBottom = 0;
materialDesign.textboxView.normal.borderWidth = 0;
materialDesign.textboxView.error.borderWidth = 0;
materialDesign.textboxView.normal.borderRadius = 0;
materialDesign.textboxView.error.borderRadius = 0;
materialDesign.textboxView.normal.borderBottomWidth = 1;
materialDesign.textboxView.error.borderBottomWidth = 1;
materialDesign.textboxView.normal.marginBottom = 5;
materialDesign.textboxView.error.marginBottom = 5;

//INLINE FORM -> not good
const inlineDesign = _.cloneDeep(t.form.Form.stylesheet);
inlineDesign.formGroup.normal.flexDirection = 'row';
inlineDesign.formGroup.error.flexDirection = 'row';
inlineDesign.textboxView.normal.flex = 1;
inlineDesign.textboxView.error.flex = 1;

const globalStyles = {
  materialDesign: materialDesign,
  inlineDesign: inlineDesign
};

export default globalStyles;