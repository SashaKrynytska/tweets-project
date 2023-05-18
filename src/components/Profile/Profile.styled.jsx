import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Avatar = styled.img`
  margin-bottom: 35px;
  width: 40%;
  display: block;
  border-radius: 50%;
  background-color: #a98772;
`;

export const User = styled.p`
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  color: #343538;
`;

export const ProfileStats = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const PSLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: bold;
  background-color: #f5f4fa;
  border: 1px solid #d5dce6;
`;

export const PSLabel = styled.span`
  margin-bottom: 5px;
  font-size: 15px;
  color: #74767a;
`;

export const PSQuantity = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: #343538;
`;