import "./App.css";
import {Button, Container, createTheme, NextUIProvider, Switch} from "@nextui-org/react";
import {useState} from "react";

const dark = createTheme({
    type: "dark",
    theme: {
        colors: {
            primaryLight: '#232a3b',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#232a3b',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',
            textPrimary: '#e2e8f0'
        },
        space: {},
        fonts: {}
    }
})
const light = createTheme({
    type: "light",
    theme: {
        colors: {
            primaryLight: '#1C3FAA',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#1C3FAA',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',
            textPrimary: '#2d3748'
        },
        space: {},
        fonts: {}
    }
})

const DarkModeSwitcher = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <Button onClick={() => setClicked(!clicked)}
                css={{backgroundColor: "$white", color: "$textPrimary"}} rounded>
            Dark Mode
            <Switch onClick={(e) => {
                setClicked(!clicked);
                e.stopPropagation();
            }} css={{ml: 10}} checked={clicked}></Switch>
        </Button>
    );
}

function App() {
    return (
        <NextUIProvider theme={light}>
            <Container css={{backgroundColor: "$primary", height: "100vh"}} fluid>
                <DarkModeSwitcher></DarkModeSwitcher>
            </Container>
        </NextUIProvider>
    );
}

export default App;
