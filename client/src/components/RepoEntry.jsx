import React from 'react';
// var index = require('../../../server/index.js')

const RepoEntry = (props) => (
  <div>
    <h4> Repo List Table</h4>
    <thead>
      <tr>
        <th>User</th>
        <th>Repo ID</th>
        <th>Repo Name</th>
        <th>Create At</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{props.user}</th>
        <th>{props.user}</th>
        <th>{props.user}</th>
        <th>{props.user}</th>
      </tr>
    </tbody>
  </div>
)

export default RepoEntry;