import React from "react";

const ApprovalTag = ({ status }) => (
  <div className="approval-container w-100">
    {!status ? (
      <div className="approval-tag text-light bg-danger">NOT APPROVED</div>
    ) : (
      <div className="approval-tag text-light bg-success">APPROVED</div>
    )}
  </div>
);

export default ApprovalTag;
