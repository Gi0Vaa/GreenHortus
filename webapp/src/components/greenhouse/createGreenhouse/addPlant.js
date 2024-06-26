import React from 'react';
import { useState, useEffect } from 'react';

import plantsImg from '@images/Potted-plants.svg'
import SearchbarProp from '@inputs/search/searchbarProp';

import { getPlantById, getPlantsByName } from '@services/plants';

const AddPlant = ({plant, setPlant}) => {
    const [selectedProp, setSelectedProp] = useState(undefined);

    useEffect(() => {
        if(selectedProp === "") return setPlant(null)
        if(!selectedProp) return;
        getPlantById(selectedProp.id)
            .then(p => {
                setPlant(p);
            });
    }, [selectedProp, setPlant]);

    return (
        <React.Fragment>
            <h3 className=" font-bold text-green-950 p-3" >Add your first Plant</h3>
            <div className="grid grid-cols-1 xl:grid-cols-2" >
                <div className="hidden xl:block h-80">
                    <img src={plantsImg} alt="greenhouse" className="h-full w-full object-cover" />
                </div>
                <div className='flex flex-col gap-3 p-2'>
                    <SearchbarProp 
                        setSelectedProp={setSelectedProp} 
                        searchResults={getPlantsByName}
                        searchValue={plant?.name || ""} 
                    />
                    <p>{plant?.description || ""}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddPlant;