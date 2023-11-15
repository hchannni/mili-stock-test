import styled from "styled-components";
import HookingButton from "../components/HookingButton";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";

const HookingButtons = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function LikeProductPage() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="관심상품" />
      <HookingButtons>
        <HookingButton desc="요즘 인기 있는" pageName="인기상품" link="/" />
        <HookingButton desc="현명한 소비를 위한" pageName="할인상품" link="/" />
        <HookingButton desc="혹시 이건 어때요?" pageName="신상품" link="/" />
      </HookingButtons>
    </ScreenContainer>
  );
}

export default LikeProductPage;
