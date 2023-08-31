import { AddressBook, At, GenderIntersex, Phone } from '@phosphor-icons/react';
import Description, { DescriptionItem } from '../description';
import Tooltip from '../tooltip';

interface IInformation {
  contactName: string;
  phone: string;
  email: string;
  gender: string;
}

const mockData: IInformation = {
  contactName: 'Long Bui',
  phone: '(+84) 903 026 505',
  email: 'longbui.7796@gmail.com',
  gender: 'Female',
};

interface IInformationProps {
  information?: IInformation;
  isEditing: boolean;
}

const Information = ({
  information = mockData,
  isEditing,
}: IInformationProps) => {
  return (
    <Description>
      <DescriptionItem className="col-span-2">
        <AddressBook size={20} className="inline-block mr-2" />
        <Tooltip text={information.contactName}>
          {information.contactName}
        </Tooltip>
      </DescriptionItem>
      <DescriptionItem className="col-span-2">
        <Phone size={20} className="inline-block mr-2" />
        <Tooltip text={information.phone}>{information.phone}</Tooltip>
      </DescriptionItem>
      <DescriptionItem className="col-span-1">
        <At size={20} className="inline-block mr-2" />
        <Tooltip text={information.email}>{information.email}</Tooltip>
      </DescriptionItem>
      <DescriptionItem className="col-span-1">
        <GenderIntersex size={20} className="inline-block mr-2" />
        <Tooltip text={information.gender}>{information.gender}</Tooltip>
      </DescriptionItem>
    </Description>
  );
};

export default Information;
