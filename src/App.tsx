import {GroupList} from "./Widget/GroupList/GroupList.tsx";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {
    AppRoot,
    View,
    Panel,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {FilterProvider} from "./features/SortableGroups/model/context.tsx";
import GroupFilter from "./features/SortableGroups/ui/GroupFilter.tsx";

function App() {
    return (
        <AppRoot>
            <View activePanel="main">
                <Panel id="main">
                    <MainPage>
                        <FilterProvider>
                            <GroupFilter/>
                            <GroupList/>
                        </FilterProvider>
                    </MainPage>
                </Panel>
            </View>
        </AppRoot>
    )
}

export default App
