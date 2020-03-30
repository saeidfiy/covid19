import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Collapse_info = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '2rem' }}>توصیه های کرونایی</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <p className="text-gray-700 text-base text-right">
              <span> شستشوی دستها با آب و صابون به مدت ۲۰ ثانیه🧼</span>
              <br></br>
              <span>پوشاندن دهان و بیتی به هنگام عطسه🤧</span>
              <br></br>
              <span>خودداری از تماس نزدیک با افراد⛔</span>
              <br></br>
              <span>پخت کامل غذا🍲</span>
            </p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Collapse_info;
