/* eslint-disable react/no-array-index-key */
import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

import {IBreed} from 'types/breeds'

import styles from './BreedSelector.module.scss'

const useItemStyles = makeStyles(theme => ({
  root: {
    '& > .MuiTreeItem-content > .MuiTreeItem-label': {
      display: 'flex',
      alignItems: 'center',
      padding: '4px 0',
      background: 'transparent !important',
      pointerEvents: 'none',
    },
    '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
      content: "''",
      display: 'inline-block',
      width: 12,
      height: 12,
      marginRight: 8,
      border: '1px solid #ccc',
      background: 'white',
    },
  },
  iconContainer: {
    marginRight: 12,
    '& > svg': {
      fontSize: '24px',
      '&:hover': {
        opacity: 0.6,
      },
    },
  },
  label: {
    padding: 0,
  },
  selected: {
    '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
      background: 'red',
      border: '1px solid transparent',
    },
  },
}))

type BreedSelectorT = {
  breedInput: IBreed
  selectBreedHandler: (selection: string[]) => void
}

const BreedSelector = ({
  breedInput,
  selectBreedHandler,
}: BreedSelectorT): JSX.Element => {
  const classesItem = useItemStyles()
  const breedAncestors = Object.keys(breedInput)

  const [expanded, setExpanded] = useState([])
  const [selected, setSelected] = useState<string[]>([])

  const handleToggle = (event, nodeIds) => {
    if (event.target.nodeName !== 'svg') {
      return
    }

    setExpanded(nodeIds)
  }

  const handleSelect = (event, nodeIds) => {
    if (event.target.nodeName === 'svg') {
      return
    }

    const first = nodeIds[0]
    const isAncestor = breedAncestors.includes(first)

    if (selected.includes(first)) {
      const filtered = selected.filter(breed => breed !== first)
      const remains = isAncestor
        ? filtered.filter(breed => !breed.includes(`|${first}`))
        : filtered

      setSelected(remains)
    } else {
      const remains = isAncestor
        ? selected.filter(breed => !breed.includes(`|${first}`))
        : selected

      setSelected([...remains, first])
    }
  }

  useEffect(() => {
    selectBreedHandler(selected)
  }, [selected])

  return (
    <div className={styles.selector_container}>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        {breedAncestors.map((breed: string, index: number) => (
          <TreeItem
            key={`breed_tree_container_${index}`}
            classes={classesItem}
            nodeId={breed}
            label={breed.toUpperCase()}
          >
            {!!breedInput[breed] &&
              breedInput[breed].map((subBreed: string, subIndex: number) => (
                <TreeItem
                  key={`sub_breed_tree_item_${subIndex}`}
                  classes={classesItem}
                  nodeId={`${subBreed}|${breed}`}
                  label={subBreed.toUpperCase()}
                />
              ))}
          </TreeItem>
        ))}
      </TreeView>
    </div>
  )
}

export default BreedSelector
