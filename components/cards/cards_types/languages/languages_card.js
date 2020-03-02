"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _languages_front = require("./languages_front/languages_front");

var _languages_back = require("./languages_back/languages_back");

var _mapping = require("./data/mapping");

var _languages_card_edit_dialog = require("./languages_edit_dialog/languages_card_edit_dialog");

var _validator = require("./data/validator");

var _contexts = require("../../../../utils/context/contexts");

var LanguagesCardComponent = function LanguagesCardComponent(_ref) {
  var variant = _ref.variant;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit,
      mode = _useContext.mode;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapLanguagesFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapLanguagesToJsonResume)(editedData));
  }, []);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateLanguagesComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    isComplete: isComplete,
    data: mappedData,
    sides: {
      front: _languages_front.LanguagesFront,
      back: _languages_back.LanguagesBack
    },
    variant: variant,
    side: "back",
    editDialog: {
      component: _languages_card_edit_dialog.LanguagesCardEditDialog,
      validationSchema: _validator.LanguageValidator,
      onEdit: onDialogEdited
    }
  });
};

var LanguagesCard = LanguagesCardComponent;
exports.LanguagesCard = LanguagesCard;