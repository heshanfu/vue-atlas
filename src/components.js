import position from './position.js'

// import VaToast from './Toast/VaToast.vue'
import VaTab from './Tabs/VaTab.vue'
import VaForm from './Form/VaForm.vue'
import VaRow from './Layout/VaRow.vue'
import VaIcon from './Icon/VaIcon.vue'
import VaPage from './Page/VaPage.vue'
import VaTabs from './Tabs/VaTabs.vue'
import VaCard from './Card/VaCard.vue'
import VaAffix from './Affix/VaAffix.vue'
import VaTable from './Table/VaTable.vue'
import VaRange from './Range/VaRange.vue'
import VaAside from './Aside/VaAside.vue'
import VaRadio from './Radio/VaRadio.vue'
import VaInput from './Input/VaInput.vue'
import VaAlert from './Alert/VaAlert.vue'
import VaBars from './Sidebar/VaBars.vue'
import VaModal from './Modal/VaModal.vue'
import VaBadge from './Badge/VaBadge.vue'
import VaSelect from './Select/VaSelect.vue'
import VaOption from './Select/VaOption.vue'
import VaTopbar from './Topbar/VaTopbar.vue'
import VaColumn from './Layout/VaColumn.vue'
import VaButton from './Button/VaButton.vue'
import VaFormItem from './Form/VaFormItem.vue'
import VaLoading from './Loading/VaLoading.vue'
import VaTooltip from './Tooltip/VaTooltip.vue'
import VaSidebar from './Sidebar/VaSidebar.vue'
import VaLozenge from './Lozenge/VaLozenge.vue'
import VaRadioBtn from './Radio/VaRadioBtn.vue'
import VaMinibar from './Sidebar/VaMinibar.vue'
import VaContainer from './Layout/VaContainer.vue'
import VaCheckbox from './Checkbox/VaCheckbox.vue'
import VaDropdown from './Dropdown/VaDropdown.vue'
import VaTextarea from './Textarea/VaTextarea.vue'
import VaRadioGroup from './Radio/VaRadioGroup.vue'
import VaModalMethod from './Modal/VaModalMethod.js'
import VaToastMethod from './Toast/VaToastMethod.js'
import VaAnimQueue from './AnimQueue/VaAnimQueue.vue'
import VaTypeahead from './Typeahead/VaTypeahead.vue'
import VaSidebarGroup from './Sidebar/VaSidebarGroup'
import VaMinibarItem from './Sidebar/VaMinibarItem.vue'
import VaBreadcrumb from './Breadcrumb/VaBreadcrumb.vue'
import VaCheckboxBtn from './Checkbox/VaCheckboxBtn.vue'
import VaTimepicker from './Timepicker/VaTimepicker.vue'
import VaPageHeader from './PageHeader/VaPageHeader.vue'
import VaDatepicker from './Datepicker/VaDatepicker.vue'
import VaPlaceholder from './Placeholder/VaPlaceholder.vue'
import VaSidebarHeader from './Sidebar/VaSidebarHeader.vue'
import VaCheckboxGroup from './Checkbox/VaCheckboxGroup.vue'
import VaBreadcrumbItem from './Breadcrumb/VaBreadcrumbItem.vue'
import VaSidebarGroupItem from './Sidebar/VaSidebarGroupItem.vue'
import VaLayoutManager from './LayoutManager/VaLayoutManager.vue'
import VaSidebarScrollarea from './Sidebar/VaSidebarScrollarea.vue'
import VaSidebarGroupLevel from './Sidebar/VaSidebarGroupLevel.vue'
import VaPlaceholderText from './Placeholder/VaPlaceholderText.vue'
import VaSidebarGroupTitle from './Sidebar/VaSidebarGroupTitle.vue'
import VaSidebarGroupToggle from './Sidebar/VaSidebarGroupToggle.vue'
import VaPlaceholderImage from './Placeholder/VaPlaceholderImage.vue'
import VaProgressTracker from './ProgressTracker/VaProgressTracker.vue'
import VaPlaceholderHeading from './Placeholder/VaPlaceholderHeading.vue'

const Components = {
  // VaToast,
  VaRow,
  VaTab,
  VaTabs,
  VaForm,
  VaCard,
  VaPage,
  VaIcon,
  VaBars,
  VaModal,
  VaInput,
  VaRadio,
  VaTable,
  VaAside,
  VaRange,
  VaAffix,
  VaBadge,
  VaAlert,
  VaSelect,
  VaColumn,
  VaTopbar,
  VaOption,
  VaButton,
  VaLoading,
  VaTooltip,
  VaSidebar,
  VaLozenge,
  VaMinibar,
  VaCheckbox,
  VaFormItem,
  VaRadioBtn,
  VaDropdown,
  VaTextarea,
  VaContainer,
  VaAnimQueue,
  VaTypeahead,
  VaTimepicker,
  VaBreadcrumb,
  VaDatepicker,
  VaRadioGroup,
  VaPageHeader,
  VaPlaceholder,
  VaCheckboxBtn,
  VaMinibarItem,
  VaSidebarGroup,
  VaLayoutManager,
  VaSidebarHeader,
  VaCheckboxGroup,
  VaBreadcrumbItem,
  VaProgressTracker,
  VaPlaceholderText,
  VaSidebarGroupItem,
  VaPlaceholderImage,
  VaSidebarScrollarea,
  VaSidebarGroupLevel,
  VaSidebarGroupTitle,
  VaPlaceholderHeading,
  VaSidebarGroupToggle
}

const install = function (Vue, locale) {
  for (let i in Components) {
    Vue.component(i, Components[i])
  }

  Vue.directive('VaPosition', position)
  Vue.prototype.VaToast = VaToastMethod
  Vue.prototype.VaModal = VaModalMethod
  Vue.prototype.VaLocale = locale || 'en'
  window.VaLocale = locale || 'en'
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install

export default Components
