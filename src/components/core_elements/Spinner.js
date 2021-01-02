import { StyledSpinnerNext } from 'baseui/spinner'
import styled from 'styled-components'
import { colors } from 'baseui/tokens'

const Spinner = styled(StyledSpinnerNext)`
  border-top-color: ${(props) => props.color};
`

Spinner.defaultProps = {
  color: colors.gray800
}

export default Spinner
