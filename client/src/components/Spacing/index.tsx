import styled from 'styled-components';

interface ISpacing {
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  display?: string;
  textAlign?: string;
  align?: string;
  justify?: string;
}
const Spacing = styled.div<ISpacing>`
  height: ${p => (p.height ? `${p.height}` : '1rem')};
  width: ${p => p.width && `${p.width}`};
  margin: ${p => p.margin && `${p.margin}`};
  padding: ${p => p.padding && `${p.padding}`};
  display: ${p => p.display && `${p.display}`};
  align-items: ${p => p.align && `${p.align}`};
  justify-content: ${p => p.justify && `${p.justify}`};
  text-align: ${p => p.textAlign && `${p.textAlign}`};
`;

export default Spacing;
