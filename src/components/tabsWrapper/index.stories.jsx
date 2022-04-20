import TabsWrapper from "./index"
import tabsJSON from '../../data/tabs.json'
import Tab from "../tab"

export default {
    title: 'Layout/TabsWrapper',
    component: TabsWrapper
}

const Template = (args) => <TabsWrapper {...args} />

export const Default = Template.bind({})
Default.args = {
    children: tabsJSON.map(item => <Tab text={item.title} key={item.id} />)
}
