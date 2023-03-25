import React from 'react'
import { PostI } from '../../Types/defaultTypes'
import CatalogueItem from '../CatalogueItem/CatalogueItem'

interface CatalogueListPropsI {
    posts: Array<PostI>
}

function CatalogueList({posts, ...props}: CatalogueListPropsI) {
  return (
    <div>
        {
            posts.map( el => <CatalogueItem post={el} />)
        }
    </div>
  )
}

export default CatalogueList