import { motion } from 'framer-motion';

const Signature = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            src="/signature.png"
            alt="Ridoan's Signature"
            className="w-48 md:w-56 lg:w-64 h-auto mb-4 filter invert dark:invert-0 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-sm"
          >
            With best regards
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Signature;
