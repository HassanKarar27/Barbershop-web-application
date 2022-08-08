import react from 'react'
import { FaCheck } from 'react-icons/fa';
import Button from '../components/Button';
import Footer from '../sections/Footer';
import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';

const Register = () => {

    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />

            <main className="grow">
                <Section title={`Create a free account`}>
                    <div className="w-full pt-6 flex flex-row content-center justify-center">

                        <div className='text-center flex flex-1 px-20 flex-col mx-1 '>

                            <div className={"flex flex-row w-full content-between justify-between gap-2"}>

                                <input
                                    placeholder='Firstname'
                                    type={"text"}
                                    name={"firstname"}
                                    required
                                    className="border-[1px] w-full border-slate-400 border-solid p-3 mb-1 text-center"
                                />

                                <input
                                    placeholder='Lastname'
                                    type={"text"}
                                    name={"lastname"}
                                    required
                                    className="border-[1px] w-full border-slate-400 border-solid p-3 mb-1 text-center"
                                />

                            </div>

                            <input
                                placeholder='Email'
                                type={"email"}
                                name={"email"}
                                required
                                className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                            />

                            <input
                                placeholder='Username'
                                type={"text"}
                                name={"username"}
                                required
                                className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                            />

                            <div className={"flex flex-row content-between justify-between gap-2"}>

                                <input
                                    placeholder='Enter your password'
                                    type={"password"}
                                    name={"password"}
                                    className="border-[1px] w-full border-slate-400 border-solid p-3 mb-2 text-center"
                                />

                                <input
                                    placeholder='Re-Enter your password'
                                    type={"password"}
                                    name={"rpassword"}
                                    required
                                    className="border-[1px] w-full border-slate-400 border-solid p-3 mb-2 text-center"
                                />
                            </div>

                            <input
                                placeholder='Phone number'
                                type={"tel"}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name={"phone"}
                                required
                                className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                            />

                            <input
                                placeholder='Address'
                                type={"text"}
                                name={"address"}
                                required
                                className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                            />

                            <div className={"flex flex-row content-between justify-between gap-2"}>
                            <input
                                placeholder='City'
                                type={"text"}
                                name={"city"}
                                required
                                className="border-[1px] w-full border-slate-400 border-solid p-3 mb-1 text-center"
                            />

                            <input
                                placeholder='Zip code'
                                type={"text"}
                                name={"zip"}
                                required
                                className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                                />
                                
                            </div>

                            <select
                                placeholder='State'
                                name={"state"}
                                required
                                className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                            >

                                {/* start states */}
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                {/* end states */}

                            </select>


                            <br />
                            <Button title='Create account' />
                        </div>
                        {/* container ends */}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}

export default Register;