import styled from "styled-components";

interface TextProps {
  text: string;
}

export default function DotList({ text }: TextProps) {
  return (
    <>
      <List>
        <span className="circle"></span> {text}
      </List>
    </>
  );
}

const List = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 20rem;
  color: #fff;
  margin-top: 12px;
  word-break: keep-all;
  line-height: 1.5;
  word-break: keep-all;
  span.circle {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #07788c;
    margin-right: 18px;
    flex-shrink: 0;
    margin-top: 10px;
  }
`;
