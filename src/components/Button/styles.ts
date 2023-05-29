import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  align-items: center;
  justify-items: center;

  background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT};
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.COLORS.WHITE
}))``