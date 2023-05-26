import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

const ComponentCard2 = ({ children, title, subtitle }) => {
  return (
    <Card>
      <CardBody className="p-4">
        <CardSubtitle className="text-muted mb-3">{subtitle || ''}</CardSubtitle>
        <div>{children}</div>
      </CardBody>
    </Card>
  );
};

ComponentCard2.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.node
};

export default ComponentCard2;
