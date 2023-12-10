import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 390px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    background: var(--ios-background-light, rgba(249, 249, 249, 0.94));
    /* ios/blur-light */
    box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(10px);
`

const Icon = styled.div`
    width: 28px;
    height: 28px;
    flex-shrink: 0;
`

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

const Info = styled.div`
    display: flex;
    height: 49px;
    padding: 11px 0px 8px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 
`

const TextBox = styled.div`
    align-self: stretch
`

const Title = styled.div`
    color: var(--ios-blue-light, #007AFF);
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.24px;
`



function HomeTab() {
    return (
    <Container>
      <Tabs>
        <Info>
            <Icon />
            <TextBox>
                <Title>Home</Title>
            </TextBox>
        </Info>
        <Info>
            <Icon />
            <TextBox>
                <Title>Like</Title>
            </TextBox>
        </Info>
        <Info>
            <Icon />
            <TextBox>
                <Title>My</Title>
            </TextBox>
        </Info>
        <Info>
            <Icon />
            <TextBox>
                <Title>All</Title>
            </TextBox>
        </Info>
      </Tabs>
    </Container>
    );
}

export default HomeTab;