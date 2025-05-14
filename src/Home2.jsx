import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fetchdata, Insertdata } from './Store2'

const Home2 = () => {
    const { loading, data, error } = useSelector((state) => state)
    const dispatch = useDispatch()
    var txtname = useRef();
    var txtemail = useRef();
    var txtpassword = useRef();


    useEffect(() => {
        dispatch(Fetchdata())
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault();

        var name = txtname.current.value;
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()

        a.set('name', name)
        a.set('email', email)
        a.set('password', password)

        dispatch(Insertdata(a))
    }

    if (loading == true) {
        return  <div className="spinner" />
    }

    if (error != null) {
        return <h2 >{error}</h2>
    }

    return (
        <>
            <table border={1} cellPadding={7} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <form method="post" onSubmit={handlesubmit}>
                <table border={1} cellPadding={7} cellSpacing={0.1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" ref={txtname} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" ref={txtemail} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" ref={txtpassword} /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value={'submit'} />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default Home2
