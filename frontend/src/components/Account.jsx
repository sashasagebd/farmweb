

export default function Account() {


    return(
        <>

        <div className="log-in-sign-in">

        </div>

        <div className="col">
            <h3>Log in:</h3>
            <form>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" />
                </div>
            </form>
            <p>Don't have an account yet?</p>
        </div>

        <div className="col">
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="phone">Phone number</label>
                    <input type="text" class="form-control" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter address" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" />
                </div>
            </form>
        </div>

        </>
    )
}