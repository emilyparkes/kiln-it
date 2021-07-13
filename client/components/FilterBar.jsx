import React from 'react'
import { connect } from 'react-redux'

function FilterBar (props) {
  return (
    <div>
      <div>Filter Logo</div>
      <div>Current Filter</div>
      {/* opens modal? of options to choose */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter
  }
}

export default connect(mapStateToProps)(FilterBar)
