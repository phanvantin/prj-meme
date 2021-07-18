const mapCleanMenuData = menuItem => {
  const data = {
    ID: menuItem.ID,
    title: menuItem.title,
    url: menuItem.url,
    child_items: menuItem.child_items || []
  }
  
  data.child_items = data.child_items.map(mapCleanMenuData)

  return data
}

export {
  mapCleanMenuData
}