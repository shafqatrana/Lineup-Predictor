import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ManageLeague = () => {

  if (0 != 0) {
    return (
      <div className="manage-league">
        Manage League
      </div>
    )
  } else {
    return (
      <div className="manage-league">
        Select League
      </div>
    )
  }

}

export default ManageLeague