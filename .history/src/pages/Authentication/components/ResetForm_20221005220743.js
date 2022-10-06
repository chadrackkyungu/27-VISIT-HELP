import React from 'react'

function ResetForm() {
    return (
        <div>
            <div className="mb-3">
                <AvField
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    required
                />
            </div>
            <div className="mb-3">
                <AvField
                    name="passwordConfirm"
                    type="password"
                    placeholder="Enter Password"
                    required
                />
            </div>
        </div>
    )
}

export default ResetForm