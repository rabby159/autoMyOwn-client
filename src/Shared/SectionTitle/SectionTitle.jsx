/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mt-10">
            <h3 className="text-5xl font-bold uppercase">{heading}</h3>
            <p className="text-blue-600-600 mb-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;