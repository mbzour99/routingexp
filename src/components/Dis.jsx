import React from 'react'

export const Dis = () => {

    
    if (resource === 'people') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Height:</strong> {data.height} cm</p>
                <p><strong>Mass:</strong> {data.mass}</p>
                <p><strong>Homeworld:</strong> {<Link to={link}>{displayHomeworld()}</Link>} </p>
                <p><strong>Birth Year:</strong> {data.birth_year}</p>
            </>
        )
    }

    else if (resource === 'planets') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Terrain:</strong> {data.terrain}</p>
                <p><strong>Climate:</strong> {data.climate}</p>
                <p><strong>Population:</strong> {data.population}</p>
                <p><strong>Surface Water:</strong> {water(data.surface_water)}</p>
                <p><strong>Gravity:</strong> {data.gravity}</p>
            </>
        )
    }

    else if (resource === 'starships') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Class:</strong> {data.starship_class}</p>
                <p><strong>Cost:</strong> {data.cost_in_credits}</p>
                <p><strong>Max Speed:</strong> {data.max_atmosphering_speed}</p>
                <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
                <p><strong>Crew:</strong> {data.crew}</p>
                <p><strong>Passengers:</strong> {data.passengers}</p>
            </>
        )
    }

    else if (resource === 'vehicles') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Class:</strong> {data.vehicle_class}</p>
                <p><strong>Cost:</strong> {data.cost_in_credits}</p>
                <p><strong>Max Speed:</strong> {data.max_atmosphering_speed}</p>
                <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
                <p><strong>Crew:</strong> {data.crew}</p>
                <p><strong>Passengers:</strong> {data.passengers}</p>
            </>
        )
    }

    else if (resource === 'species') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Classification:</strong> {data.classification}</p>
                <p><strong>Average Height:</strong> {data.average_height}</p>
                <p><strong>Average Lifespan:</strong> {data.average_lifespan}</p>
                <p><strong>Designation:</strong> {data.designation}</p>
                <p><strong>Language:</strong> {data.language}</p>
                <p><strong>Skin Colors:</strong> {data.skin_colors}</p>
            </>
        )
    }

    else {
        return (
            <>
                <h1 style={{ color: "red" }}>Your search prosses  isn't the droids you're looking for</h1>
            </>
        )
    }
}

export  default Dis;