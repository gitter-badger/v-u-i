import Row                   from './elems/Row'
import Col                   from './elems/Col'
import Btn                   from './elems/Btn'
import BtnGrp                from './elems/BtnGrp'
import Form                  from './elems/Form'
import FormItem              from './elems/FormItem'
import Input                 from './elems/Input'
import InputNumber           from './elems/InputNumber'
import Radio                 from './elems/Radio'
import Checkbox              from './elems/Checkbox'
import Switch                from './elems/Switch'
import Slider                from './elems/Slider'
import Select                from './elems/Select'
import Textarea              from './elems/Textarea'
import Table                 from './elems/Table'
import Pagination            from './elems/Pagination'
import Card                  from './elems/Card'
import Modal                 from './elems/Modal'
import Collapse              from './elems/Collapse'
import Tab                   from './elems/Tab'
import Popup                 from './elems/Popup'
import Menu                  from './elems/Menu'
import message               from './elems/message'

const install = (Vue, options)=>{
  if (install.installed){
    return
  }
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Btn.name, Btn)
  Vue.component(BtnGrp.name, BtnGrp)
  Vue.component(Form.name, Form)
  Vue.component(FormItem.name, FormItem)
  Vue.component(Input.name, Input)
  Vue.component(InputNumber.name, InputNumber)
  Vue.component(Radio.name, Radio)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Switch.name, Switch)
  Vue.component(Slider.name, Slider)
  Vue.component(Select.name, Select)
  Vue.component(Textarea.name, Textarea)
  Vue.component(Table.name, Table)
  Vue.component(Pagination.name, Pagination)
  Vue.component(Card.name, Card)
  Vue.component(Modal.name, Modal)
  Vue.component(Collapse.name, Collapse)
  Vue.component(Tab.name, Tab)
  Vue.component(Popup.name, Popup)
  Vue.component(Menu.name, Menu)
  Vue.prototype.$message = message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Row,
  Col,
  Btn,
  BtnGrp,
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Switch,
  Slider,
  Select,
  Textarea,
  Table,
  Pagination,
  Card,
  Modal,
  Collapse,
  Tab,
  Popup,
  Menu,
}
