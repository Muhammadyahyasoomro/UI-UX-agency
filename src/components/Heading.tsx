import { motion } from "framer-motion";
function Heading({ text }: { text: string }) {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
                    {text}
                </h2>
            </motion.div>
        </div>
    );
}

export default Heading;

