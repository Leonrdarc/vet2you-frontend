import { ReactComponent as Marker } from '../../assets/icons/marker_map.svg';
import { ReactComponent as Delivery } from '../../assets/icons/delivery.svg';
import { ReactComponent as Store } from '../../assets/icons/store.svg';
import styled from 'styled-components';

export const MarkerIcon = styled(Marker)`
  border-radius: 100%;
  padding: 7px;
  fill: white;
  background-color: #f1c21b;
`;
export const DeliveryIcon = styled(Delivery)`
  border-radius: 100%;
  padding: 7px;
  fill: white;
  background-color: #f1c21b;
`;
export const StoreIcon = styled(Store)`
  border-radius: 100%;
  padding: 4px;
  fill: white;
  background-color: #f1c21b;
  height: 47px;
  width: 47px;
`;
