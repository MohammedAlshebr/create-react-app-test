import React, {useEffect, useState} from 'react';


type OBJECT = {
  id: number,
  type: "A" | "B" | "C",
  price: number,
  promotionPrice: number

}

const ObjectsList: React.FC = () => {

  const [objects, setObjects] = useState<OBJECT[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/mock-api").then((res) => {
      res.json()
        .then((data) => {
            setObjects(data as OBJECT[]);
          }
        )

    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <div>Loading, please wait...</div>;
  }

  return <div>{objects.map(object => {

    if (!object.promotionPrice) {
      return null
    }

    return <div key={object.id}>{object.promotionPrice}</div>
  })}</div>

}

export default ObjectsList;
